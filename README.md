# Resizable Split Pane Layout
This has been adapted from the [@11mb/angular-resizable](https://github.com/11mb/angular-resizable), itself an Angular2 version of  [@reklino/angular-resizable](https://github.com/Reklino/angular-resizable) for AngularJS. Similar work in JavaScript: [@RickStrahl/jquery-resizable](https://github.com/RickStrahl/jquery-resizable); [Split.js](https://split.js.org/) by [@nathancahill](https://github.com/nathancahill/split/).

## Usage
Installation instructions
Install ngx-bootstrap from npm:

```
npm install @3dgenomes/ngx-resizable --save
```
Add needed package to NgModule imports:
```
import { NgxResizableModule } from '@3dgenomes/ngx-resizable';

@NgModule({
  ...
  imports: [ResizableComponent,...]
  ...
})
```
Use component `<rsz-layout>` to your HTML:

### Default layout - HTML-like table rows:
```
        +--------+--------+
        |        >        |    [Directions]
  Row 1 | Cell 1 > Cell 2 |    Rows: dragbar on bottom 'v'
        |        >        |    Cells: dragbar on right '>'
        + v v v v v v v v + 
        |        >        |
  Row 2 | Cell 3 > Cell 4 |
        |        >        |
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
### Columns layout:
```
    Col 1     Col 2
  +--------+--------+
  |        >        |    [Directions]
  | Cell 1 > Cell 3 |    Rows: dragbar on right '>'
  |        >        |    Cells: dragbar on bottom 'v'
  | v v v  >  v v v |
  |        >        |
  | Cell 2 > Cell 4 |
  |        >        |
  +--------+--------+
        Drag bar
```
```
  <div class="content cols">
    <rsz-layout class="row" [directions]="['right']" [rFlex]="true">
      <rsz-layout class="cell" [directions]="['bottom']" [rFlex]="true">
        <p>Cell Content 1</p>
      </rsz-layout>
      <rsz-layout class="cell" [directions]="['none']" [rFlex]="false">
        <p>Cell Content 2</p>
      </rsz-layout>
    </rsz-layout>
    <rsz-layout class="row" [directions]="['none']" [rFlex]="false">
      <rsz-layout class="cell" [directions]="['bottom']" [rFlex]="true">
        <p>Cell Content 3</p>
      </rsz-layout>
      <rsz-layout class="cell" [directions]="['none']" [rFlex]="false">
        <p>Cell Content 4</p>
      </rsz-layout>
    </rsz-layout>
  </div>
```


## Options
Attributes  | Default | Accepts | Description
--- | --- | --- | ---
rDirections | ['right'] | ['top', 'right', 'bottom', 'left',] | Determines which sides of the element are resizable.
rFlex | false | boolean | Set as true if you are using flexbox on a cell.

## Events

### angular-resizable.resizeStart

This event is emitted at the beginning of a resize with the following info object:
- `info.width` : The width of the directive at time of resize start. **Will be false if resizing vertically**
- `info.height` : The height of the directive at time of resize start. **Will be false if resizing horizontally**
- `info.id` : The id of the directive. **Will be false if there is no id set.**
- `info.evt` : original mouse event object

### angular-resizable.resizing
Called repeatedly while the mouse is being moved. By default, only calls once every 100ms to keep CPU usage low.
- `info.width` : The width of the directive at time of resize end. **Will be false if resizing vertically**
- `info.height` : The height of the directive at time of resize end. **Will be false if resizing horizontally**
- `info.id` : The id of the directive. **Will be false if there is no id set.**
- `info.evt` : original mouse event object

### angular-resizable.resizeEnd
This event is emitted at the end of a resize with the following object as an argument:
- `info.width` : The width of the directive at time of resize end. **Will be false if resizing vertically**
- `info.height` : The height of the directive at time of resize end. **Will be false if resizing horizontally**
- `info.id` : The id of the directive. **Will be false if there is no id set.**
- `info.evt` : original mouse event object

## Version notes

### 1.0.1
- Add README.md
- Export component via public_api.ts

## License

MIT