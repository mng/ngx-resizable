import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxResizableModule } from 'ngx-resizable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxResizableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
