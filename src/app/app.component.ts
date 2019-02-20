import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cols = false;
  cells = {
    a: 'bottom',
    a1: 'right',
    a2: 'right',
    b: 'none',
    b1: 'right',
    b2: 'none'
  };

  app = require( 'ngx-resizable/package.json');
  title: string = this.app.name;
  version: string = this.app.version;

  constructor() {
    console.log('Demo of ngx-resizable:', this.version);
   }


  toggleDirection() {
    this.cols = !this.cols;
    if (this.cols) {
      this.cells.a = 'right';
      this.cells.a1 = 'bottom';
      this.cells.b1 = 'bottom';
    } else {
      this.cells.a = 'bottom';
      this.cells.a1 = 'right';
      this.cells.b1 = 'right';
    }
  }

}
