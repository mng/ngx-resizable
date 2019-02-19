import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-resizable';
  version: string = require( '../../package.json').version;

  constructor() {
    console.log('Demo of ngx-resizable:', this.version);
   }

}
