import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

export type Point = {x: number, y: number};

@Directive({
  selector: '[rszDragHandle]'
})
export class DragDirective {

  @Output() DragStart = new EventEmitter<Point>();
  @Output() Drag = new EventEmitter<Point>();
  @Output() DragEnd = new EventEmitter<Point>();

  private dragging = false;

  @HostListener('mousedown', ['$event'])
  onMousedown(e: MouseEvent) {
    if (e.which === 1) {
      this.dragging = true;
      this.DragStart.emit({ x: e.clientX, y: e.clientY });
    }
  }
  @HostListener('touchstart', ['$event'])
  onTouchstart(e: TouchEvent) {
    const touch = e.touches[0];
    this.dragging = true;
    this.DragStart.emit({ x: touch.clientX, y: touch.clientY });
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseup(e: MouseEvent) {
    if (this.dragging) {
      this.DragEnd.emit({ x: e.clientX, y: e.clientY });
    }
    this.dragging = false;
  }
  @HostListener('document:touchend', ['$event'])
  @HostListener('document:touchcancel', ['$event'])
  onTouchend(e: TouchEvent) {
    if (this.dragging) {
      const touch = e.changedTouches[0];
      this.DragEnd.emit({ x: touch.clientX, y: touch.clientY });
    }
    this.dragging = false;
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(e: MouseEvent) {
    if (this.dragging) {
      this.Drag.emit({ x: e.clientX, y: e.clientY });
    }
  }
  @HostListener('document:touchmove', ['$event'])
  onTouchmove(e: TouchEvent) {
    if (this.dragging) {
      const touch = e.touches[0];
      this.Drag.emit({ x: touch.clientX, y: touch.clientY });
    }
  }
}
