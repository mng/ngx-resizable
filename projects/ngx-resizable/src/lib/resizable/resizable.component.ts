import { Component, OnInit, HostBinding, Input, ElementRef, ViewEncapsulation, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { NgxResizeableWindowRef } from '../window.service';

@Component({
  selector: 'rsz-layout',
  templateUrl: 'resizable.component.html',
  styleUrls: ['resizable.component.scss'],
  providers: [ { provide: 'Window', useValue: window } ],
  encapsulation: ViewEncapsulation.None
})
export class ResizableComponent implements OnInit, AfterViewInit {

  @HostBinding('class.resizable') resizable = true;
  @HostBinding('class.no-transition') noTransition = false;
  @HostBinding('style.width') width;
  @HostBinding('style.height') height;
  @HostBinding('style.flex-basis') flexBasis;

  @Input() directions;
  @Input() rFlex = false;

  @Output() resizeStart = new EventEmitter();
  @Output() resizing = new EventEmitter();
  @Output() resizeEnd = new EventEmitter();

  private nativeElement;

  private style;

  private w;
  private h;

  private vx = 1;
  private vy = 1;

  private start;

  private dragDir;

  private axis;

  private info = {};

  constructor(private regionElement: ElementRef, private windowRef: NgxResizeableWindowRef) {
    this.nativeElement = this.regionElement.nativeElement;
  }

  ngOnInit() {
    if (!this.rFlex) { this.resizable = false; } // Added to permit use of component for all cells
    this.flexBasis = 'flexBasis' in this.nativeElement.style ? 'flexBasis' :
      'webkitFlexBasis' in this.nativeElement.style ? 'webkitFlexBasis' :
      'msFlexPreferredSize' in this.nativeElement.style ? 'msFlexPreferredSize' : 'flexBasis';
  }

  ngAfterViewInit() {
    this.style = this.windowRef.nativeWindow.getComputedStyle(this.nativeElement);
  }

  private updateInfo(e: DragEvent) {
    this.info['width'] = false; this.info['height'] = false;
    if (this.axis === 'x') {
      this.info['width'] = parseInt(this.nativeElement.style[this.rFlex ? this.flexBasis : 'width'], 10);
    } else {
      this.info['height'] = parseInt(this.nativeElement.style[this.rFlex ? this.flexBasis : 'height'], 10);
    }
    this.info['id'] = this.nativeElement.id;
    this.info['evt'] = e;
  }

  public dragStart(e: DragEvent, direction) {
    this.dragDir = direction;
    this.axis = (this.dragDir === 'left' || this.dragDir === 'right') ? 'x' : 'y';
    this.start = (this.axis === 'x' ? e.x : e.y);
    this.w = parseInt(this.style.getPropertyValue('width'), 10);
    this.h = parseInt(this.style.getPropertyValue('height'), 10);

    this.resizeStart.emit({ info: this.info });

    // prevent transition while dragging
    this.noTransition = true;
  }

  public dragEnd(e: DragEvent) {
    this.updateInfo(e);
    this.resizeEnd.emit({ info: this.info });
    this.noTransition = false;
  }

  public dragging(e: DragEvent) {
    const offset = (this.axis === 'x') ? this.start - e.x : this.start - e.y;

    let operand = 1;
    switch (this.dragDir) {
      case 'top':
        operand = -1;
        /* falls through */
      case 'bottom':
        const height = (this.h - offset * this.vy * operand) + 'px';
        if (this.rFlex) {
          this.flexBasis = height;
        } else {
          this.height = height;
        }
        break;
      case 'left':
        operand = -1;
        /* falls through */
      case 'right':
        const width = (this.w - offset * this.vx * operand) + 'px';
        if (this.rFlex) {
          this.flexBasis = width;
        } else {
          this.width = width;
        }
        break;
    }
    this.updateInfo(e);
    this.resizing.emit({ info: this.info });
  }
}
