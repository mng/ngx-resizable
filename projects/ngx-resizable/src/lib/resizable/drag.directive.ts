import { Directive, ElementRef, Output, OnInit, EventEmitter, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Directive({
  selector: '[rszDragHandle]',
  providers: [ { provide: DOCUMENT, useValue: document } ],
})
export class DragDirective implements OnInit {

  @Output() DragStart = new EventEmitter();
  @Output() Drag = new EventEmitter();
  @Output() DragEnd = new EventEmitter();

  private dragging = false;

  @HostListener('mousedown', ['$event'])
  onMousedown(event) {
    if (event.which === 1) {
      this.dragging = true;
      this.DragStart.emit({ originalEvent: event });
    }
  }
  @HostListener('document:mouseup', ['$event'])
  onMouseup(event) {
    if (this.dragging) {
      this.DragEnd.emit({ originalEvent: event });
    }
    this.dragging = false;
  }
  @HostListener('document:mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (this.dragging) {
      this.Drag.emit({ originalEvent: event });
    }
  }

  constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    // const el = this.elementRef.nativeElement;
    // el.addEventListener('mousedown', (event) => {
    //   if (event.which === 1) {
    //     this.dragging = true;
    //     this.DragStart.emit({ originalEvent: event });
    //   }
    // }, false);

    // this.document.addEventListener('mouseup', (event) => {
    //   if (this.dragging) {
    //     this.DragEnd.emit({ originalEvent: event });
    //   }

    //   this.dragging = false;
    // }, false);

    // this.document.addEventListener('mousemove', (event) => {
    //   if (this.dragging) {
    //     this.Drag.emit({ originalEvent: event });
    //   }
    // }, false);
  }
}
