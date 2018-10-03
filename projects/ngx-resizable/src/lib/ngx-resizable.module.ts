import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableComponent } from './resizable/resizable.component';
import { DragDirective } from './resizable/drag.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ResizableComponent,
    DragDirective
  ],
  exports: [
    ResizableComponent,
    DragDirective
  ]
})
export class NgxResizableModule { }
