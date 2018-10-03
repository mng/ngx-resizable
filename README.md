# Resizable Split Pane Layout
This has been adapted from the [@11mb/angular-resizable](https://github.com/11mb/angular-resizable), itself an Angular2 version of  [@reklino/angular-resizable](https://github.com/Reklino/angular-resizable) for AngularJS. Similar work in JavaScript can be found at [@nathancahill/Split.js](https://nathancahill.github.io/Split.js/), [@RickStrahl/jquery-resizable](https://github.com/RickStrahl/jquery-resizable)
## Default layout - HTML-like table rows:
```
  +--------+--------+
  | Cell 1 : Cell 2 |
  +--------+--------+
  | Cell 3 : Cell 4 |
  +--------+--------+
```
```
<div class="content">
  <rsz-layout class="row" [directions]="['bottom']" [rFlex]="true">
    <rsz-layout class="cell" [directions]="['right']" [rFlex]="true">
      <p>Cell Content 1</p>
    </rsz-layout>
    <rsz-layout class="cell" [directions]="['none']" [rFlex]="false">
      <p>Cell Content 2</p>
    </rsz-layout>
  </rsz-layout>
  <rsz-layout class="row" [directions]="['none']" [rFlex]="false">
    <rsz-layout class="cell" [directions]="['right']" [rFlex]="true">
      <p>Cell Content 3</p>
    </rsz-layout>
    <rsz-layout class="cell" [directions]="['none']" [rFlex]="false">
      <p>Cell Content 4</p>
    </rsz-layout>
  </rsz-layout>
</div>
```
## Columns layout:
```
  +--------+--------+
  | Cell 1 | Cell 2 |
  |········|········|
  | Cell 3 | Cell 4 |
  +--------+--------+
```
```
  <div class="content cols">
    ...
  </div>
```



# NgxResizableDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
