import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  app = require( 'ngx-resizable/package.json');
  title = this.app.name;
  version: string = this.app.version;

  constructor() {
    console.log('Demo of ngx-resizable:', this.version);
   }

}
