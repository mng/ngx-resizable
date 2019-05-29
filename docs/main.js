(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-resizable/package.json":
/*!*****************************************!*\
  !*** ./dist/ngx-resizable/package.json ***!
  \*****************************************/
/*! exports provided: name, version, description, main, repository, keywords, author, license, bugs, homepage, module, es2015, esm5, esm2015, fesm5, fesm2015, typings, metadata, sideEffects, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"@3dgenomes/ngx-resizable","version":"1.7.4","description":"A Resizable Split-Pane Layout for Angular6+","main":"bundles/3dgenomes-ngx-resizable.umd.js","repository":{"type":"git","url":"git+https://github.com/3DGenomes/ngx-resizable.git"},"keywords":["angular","javascript","typescript","resizable","layout","split","3dgenomes"],"author":"Mike Goodstadt <mikegoodstadt@gmail.com> (http://mikegoodstadt.com)","license":"MIT","bugs":{"url":"https://github.com/3DGenomes/ngx-resizable/issues"},"homepage":"https://3dgenomes.github.io/ngx-resizable/","module":"fesm5/3dgenomes-ngx-resizable.js","es2015":"fesm2015/3dgenomes-ngx-resizable.js","esm5":"esm5/3dgenomes-ngx-resizable.js","esm2015":"esm2015/3dgenomes-ngx-resizable.js","fesm5":"fesm5/3dgenomes-ngx-resizable.js","fesm2015":"fesm2015/3dgenomes-ngx-resizable.js","typings":"3dgenomes-ngx-resizable.d.ts","metadata":"3dgenomes-ngx-resizable.metadata.json","sideEffects":false,"dependencies":{"tslib":"^1.9.0"}};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" [ngClass]=\"{'cols': cols}\">\n  <rsz-layout class=\"row\" [directions]=\"[cells.a]\" [rFlex]=\"true\">\n    <rsz-layout class=\"cell one\" [directions]=\"[cells.a1]\" [rFlex]=\"true\">\n      <span class=\"icon-big icon_expand-1\"></span>\n      <h1>\n        <a href=\"https://3dgenomes.github.io/ngx-resizable/\">{{ title }}</a>\n      </h1>\n      <h4>Version {{version}}</h4>\n      <img width=\"150\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n    </rsz-layout>\n    <rsz-layout class=\"cell two\" [directions]=\"[cells.a2]\" [rFlex]=\"false\">\n      <h3>NGX-Resizable is a slit-pane layout component for workspaces.</h3>\n      <p>\n        This has been adapted from the <a href=\"https://github.com/11mb/angular-resizable\" target=\"_blank\">@11mb/angular-resizable</a>, itself an Angular2 version of  <a href=\"https://github.com/Reklino/angular-resizable\" target=\"_blank\">@reklino/angular-resizable</a> for AngularJS.\n        Similar designs in vanilla JavaScript are <a href=\"https://github.com/RickStrahl/jquery-resizable\" target=\"_blank\">@RickStrahl/jquery-resizable</a> and <a href=\"https://split.js.org/\" target=\"_blank\">Split.js</a> by <a href=\"https://github.com/nathancahill/split/\" target=\"_blank\">@nathancahill</a>.\n      </p>\n      <p>\n        At <a href=\"http://3dgenomes.org\" target=\"_blank\">3DGenomes.org</a> we use NGX-Resizable as one of the layout options for our 3D genomics browser TADkit.\n      </p>   \n    </rsz-layout>\n  </rsz-layout>\n  <rsz-layout class=\"row\" [directions]=\"[cells.b]\" [rFlex]=\"false\">\n    <rsz-layout class=\"cell three\" [directions]=\"[cells.b1]\" [rFlex]=\"true\">\n      <p>An Angular 7+ directive for creating resizable containers.</p>\n      <p><a href=\"https://github.com/3dgenomes/ngx-resizable\" target=\"_blank\">GitHub Repo</a></p>\n      <button class=\"btn\" (click)=\"toggleDirection()\">Changle Direction</button>\n      <p><a href=\"https://stackblitz.com/edit/3dgenomes-ngx-resizable\" target=\"_blank\">Stackblitz Demo (horizontal)</a></p>\n      <p><a href=\"https://stackblitz.com/edit/3dgenomes-ngx-resizable-vert\" target=\"_blank\">Stackblitz Demo (vertical)</a></p>\n    </rsz-layout>\n    <rsz-layout class=\"cell four\" [directions]=\"[cells.b2]\" [rFlex]=\"false\">\n    </rsz-layout>\n  </rsz-layout>\n  <a href=\"https://github.com/3dgenomes/ngx-resizable\" target=\"_blank\"><img style=\"position: absolute; top: 0; right: 0; border: 0;\" src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png\" alt=\"Fork me on GitHub\"></a>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Varela+Round\");\n:host {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  min-height: 100vh;\n  font-family: 'Varela Round', 'Helvetica', sans-serif;\n  color: #343e3d; }\nh1 {\n  margin: 0.6em 0; }\nh1 a {\n  color: #343e3d;\n  text-decoration: none; }\nh2, h3, h4, h5 {\n  margin: 0 0 0.6em; }\np {\n  margin: 0.6em 0; }\n/* Button reset */\nbutton {\n  padding: 0;\n  border: none;\n  font: inherit;\n  color: inherit;\n  background-color: transparent;\n  /* show a hand cursor on hover; some argue that we\n  should keep the default arrow cursor for buttons */\n  cursor: pointer; }\n/* Button component */\n.btn {\n  /* default for <button>, but needed for <a> */\n  display: inline-block;\n  text-align: center;\n  text-decoration: none;\n  font-size: 0.8em;\n  /* create a small space when buttons wrap on 2 lines */\n  margin: 2px 0;\n  /* invisible border (will be colored on hover/focus) */\n  border: solid 1px #607466;\n  border-radius: 4px;\n  /* button size comes from text + padding, avoid height */\n  padding: 0.2em;\n  /* make sure colors have enough contrast! */\n  color: #607466;\n  background-color: white; }\n/* old-school \"down\" effect on clic + color tweak */\n.btn:active {\n  -webkit-transform: translateY(1px);\n          transform: translateY(1px);\n  -webkit-filter: saturate(150%);\n          filter: saturate(150%); }\n/* inverse colors on hover */\n.btn:hover {\n  color: #7bd389;\n  border-color: currentColor;\n  background-color: #607466; }\n/* Firefox: remove the inner border shown on focus */\n.btn::-moz-focus-inner {\n  border: none; }\n/* make sure we have a visible focus ring */\n.btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px #607466, 0 0 0 1.5px #607466; }\n/* hide focus style if not from keyboard navigation */\n.js-focus-visible .btn:focus:not(.focus-visible) {\n  box-shadow: none; }\n.icon-big {\n  font-size: 32px;\n  border: 2px dashed #7bd389;\n  color: #7bd389;\n  padding: 10px 11px 10px 10px; }\nrsz-layout.cell {\n  padding: 1em 1.75em; }\nrsz-layout.cell.one {\n    text-align: center; }\nrsz-layout.cell.two {\n    background: #7bd389; }\nrsz-layout.cell.three {\n    background: #38e4ae; }\nrsz-layout.cell.four {\n    padding: 0;\n    background: no-repeat url(\"https://www.designrush.com/resources/publicdomainarchive//wp-content/uploads/2014/12/public-domain-images-free-stock-photos-high-quality-resolution-downloads-public-domain-archive-7-1000x665.jpg\"); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NaWtlL0dpdEh1Yi9uZ3gtcmVzaXphYmxlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQVk7QUFRWjtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixvREFBb0Q7RUFDcEQsY0FaYyxFQUFBO0FBY2hCO0VBQ0UsZUFBZSxFQUFBO0FBRWpCO0VBQ0UsY0FsQmM7RUFtQmQscUJBQXFCLEVBQUE7QUFFdkI7RUFDRSxpQkFBaUIsRUFBQTtBQUVuQjtFQUNFLGVBQWUsRUFBQTtBQUdqQixpQkFBQTtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLDZCQUE2QjtFQUM3QjtvRENQa0Q7RURTbEQsZUFBZSxFQUFBO0FBRWpCLHFCQUFBO0FBQ0E7RUFDRSw2Q0FBQTtFQUNBLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzREFBQTtFQUNBLGFBQWE7RUFDYixzREFBQTtFQUNBLHlCQWhEYztFQWlEZCxrQkFBa0I7RUFDbEIsd0RBQUE7RUFDQSxjQUFjO0VBQ2QsMkNBQUE7RUFDQSxjQXJEYztFQXNEZCx1QkFBdUIsRUFBQTtBQUV6QixtREFBQTtBQUNBO0VBQ0Usa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7QUFFeEIsNEJBQUE7QUFDQTtFQUNFLGNBN0RjO0VBOERkLDBCQUEwQjtFQUMxQix5QkFqRWMsRUFBQTtBQW1FaEIsb0RBQUE7QUFDQTtFQUNFLFlBQVksRUFBQTtBQUVkLDJDQUFBO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0RBMUVjLEVBQUE7QUE2RWhCLHFEQUFBO0FBQ0E7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGVBQWU7RUFDZiwwQkFsRmM7RUFtRmQsY0FuRmM7RUFvRmQsNEJBQTRCLEVBQUE7QUFFOUI7RUFDRSxtQkFBbUIsRUFBQTtBQURyQjtJQUdJLGtCQUFrQixFQUFBO0FBSHRCO0lBTUksbUJBNUZZLEVBQUE7QUFzRmhCO0lBU0ksbUJBOUZZLEVBQUE7QUFxRmhCO0lBWUksVUFBVTtJQUNWLCtOQUErTixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1WYXJlbGErUm91bmQnKTtcblxuJGNvbG9yMTogIzM0M2UzZDtcbiRjb2xvcjI6ICM2MDc0NjY7XG4kY29sb3IzOiAjYWVkY2MwO1xuJGNvbG9yNDogIzdiZDM4OTtcbiRjb2xvcjU6ICMzOGU0YWU7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICRjb2xvcjE7XG59XG5oMSB7XG4gIG1hcmdpbjogMC42ZW0gMDtcbn1cbmgxIGEge1xuICBjb2xvcjogJGNvbG9yMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuaDIsIGgzLCBoNCwgaDUge1xuICBtYXJnaW46IDAgMCAwLjZlbTtcbn1cbnAge1xuICBtYXJnaW46IDAuNmVtIDA7XG59XG5cbi8qIEJ1dHRvbiByZXNldCAqL1xuYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC8qIHNob3cgYSBoYW5kIGN1cnNvciBvbiBob3Zlcjsgc29tZSBhcmd1ZSB0aGF0IHdlXG4gIHNob3VsZCBrZWVwIHRoZSBkZWZhdWx0IGFycm93IGN1cnNvciBmb3IgYnV0dG9ucyAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBCdXR0b24gY29tcG9uZW50ICovXG4uYnRuIHtcbiAgLyogZGVmYXVsdCBmb3IgPGJ1dHRvbj4sIGJ1dCBuZWVkZWQgZm9yIDxhPiAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDAuOGVtO1xuICAvKiBjcmVhdGUgYSBzbWFsbCBzcGFjZSB3aGVuIGJ1dHRvbnMgd3JhcCBvbiAyIGxpbmVzICovXG4gIG1hcmdpbjogMnB4IDA7XG4gIC8qIGludmlzaWJsZSBib3JkZXIgKHdpbGwgYmUgY29sb3JlZCBvbiBob3Zlci9mb2N1cykgKi9cbiAgYm9yZGVyOiBzb2xpZCAxcHggJGNvbG9yMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAvKiBidXR0b24gc2l6ZSBjb21lcyBmcm9tIHRleHQgKyBwYWRkaW5nLCBhdm9pZCBoZWlnaHQgKi9cbiAgcGFkZGluZzogMC4yZW07XG4gIC8qIG1ha2Ugc3VyZSBjb2xvcnMgaGF2ZSBlbm91Z2ggY29udHJhc3QhICovXG4gIGNvbG9yOiAkY29sb3IyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi8qIG9sZC1zY2hvb2wgXCJkb3duXCIgZWZmZWN0IG9uIGNsaWMgKyBjb2xvciB0d2VhayAqL1xuLmJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgZmlsdGVyOiBzYXR1cmF0ZSgxNTAlKTtcbn1cbi8qIGludmVyc2UgY29sb3JzIG9uIGhvdmVyICovXG4uYnRuOmhvdmVyIHtcbiAgY29sb3I6ICRjb2xvcjQ7XG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xufVxuLyogRmlyZWZveDogcmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgc2hvd24gb24gZm9jdXMgKi9cbi5idG46Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IG5vbmU7XG59XG4vKiBtYWtlIHN1cmUgd2UgaGF2ZSBhIHZpc2libGUgZm9jdXMgcmluZyAqL1xuLmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAkY29sb3IyLFxuICAgIDAgMCAwIDEuNXB4ICRjb2xvcjI7XG59XG4vKiBoaWRlIGZvY3VzIHN0eWxlIGlmIG5vdCBmcm9tIGtleWJvYXJkIG5hdmlnYXRpb24gKi9cbi5qcy1mb2N1cy12aXNpYmxlIC5idG46Zm9jdXM6bm90KC5mb2N1cy12aXNpYmxlKSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5pY29uLWJpZyB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICRjb2xvcjQ7XG4gIGNvbG9yOiAkY29sb3I0O1xuICBwYWRkaW5nOiAxMHB4IDExcHggMTBweCAxMHB4O1xufVxucnN6LWxheW91dC5jZWxsIHtcbiAgcGFkZGluZzogMWVtIDEuNzVlbTtcbiAgJi5vbmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAmLnR3byB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yNDtcbiAgfVxuICAmLnRocmVlIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3I1O1xuICB9XG4gICYuZm91ciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgdXJsKCdodHRwczovL3d3dy5kZXNpZ25ydXNoLmNvbS9yZXNvdXJjZXMvcHVibGljZG9tYWluYXJjaGl2ZS8vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMTIvcHVibGljLWRvbWFpbi1pbWFnZXMtZnJlZS1zdG9jay1waG90b3MtaGlnaC1xdWFsaXR5LXJlc29sdXRpb24tZG93bmxvYWRzLXB1YmxpYy1kb21haW4tYXJjaGl2ZS03LTEwMDB4NjY1LmpwZycpO1xuICB9XG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1WYXJlbGErUm91bmRcIik7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJywgJ0hlbHZldGljYScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzQzZTNkOyB9XG5cbmgxIHtcbiAgbWFyZ2luOiAwLjZlbSAwOyB9XG5cbmgxIGEge1xuICBjb2xvcjogIzM0M2UzZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbmgyLCBoMywgaDQsIGg1IHtcbiAgbWFyZ2luOiAwIDAgMC42ZW07IH1cblxucCB7XG4gIG1hcmdpbjogMC42ZW0gMDsgfVxuXG4vKiBCdXR0b24gcmVzZXQgKi9cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKiBzaG93IGEgaGFuZCBjdXJzb3Igb24gaG92ZXI7IHNvbWUgYXJndWUgdGhhdCB3ZVxuICBzaG91bGQga2VlcCB0aGUgZGVmYXVsdCBhcnJvdyBjdXJzb3IgZm9yIGJ1dHRvbnMgKi9cbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi8qIEJ1dHRvbiBjb21wb25lbnQgKi9cbi5idG4ge1xuICAvKiBkZWZhdWx0IGZvciA8YnV0dG9uPiwgYnV0IG5lZWRlZCBmb3IgPGE+ICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIC8qIGNyZWF0ZSBhIHNtYWxsIHNwYWNlIHdoZW4gYnV0dG9ucyB3cmFwIG9uIDIgbGluZXMgKi9cbiAgbWFyZ2luOiAycHggMDtcbiAgLyogaW52aXNpYmxlIGJvcmRlciAod2lsbCBiZSBjb2xvcmVkIG9uIGhvdmVyL2ZvY3VzKSAqL1xuICBib3JkZXI6IHNvbGlkIDFweCAjNjA3NDY2O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC8qIGJ1dHRvbiBzaXplIGNvbWVzIGZyb20gdGV4dCArIHBhZGRpbmcsIGF2b2lkIGhlaWdodCAqL1xuICBwYWRkaW5nOiAwLjJlbTtcbiAgLyogbWFrZSBzdXJlIGNvbG9ycyBoYXZlIGVub3VnaCBjb250cmFzdCEgKi9cbiAgY29sb3I6ICM2MDc0NjY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cbi8qIG9sZC1zY2hvb2wgXCJkb3duXCIgZWZmZWN0IG9uIGNsaWMgKyBjb2xvciB0d2VhayAqL1xuLmJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgZmlsdGVyOiBzYXR1cmF0ZSgxNTAlKTsgfVxuXG4vKiBpbnZlcnNlIGNvbG9ycyBvbiBob3ZlciAqL1xuLmJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjN2JkMzg5O1xuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwNzQ2NjsgfVxuXG4vKiBGaXJlZm94OiByZW1vdmUgdGhlIGlubmVyIGJvcmRlciBzaG93biBvbiBmb2N1cyAqL1xuLmJ0bjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG4vKiBtYWtlIHN1cmUgd2UgaGF2ZSBhIHZpc2libGUgZm9jdXMgcmluZyAqL1xuLmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjNjA3NDY2LCAwIDAgMCAxLjVweCAjNjA3NDY2OyB9XG5cbi8qIGhpZGUgZm9jdXMgc3R5bGUgaWYgbm90IGZyb20ga2V5Ym9hcmQgbmF2aWdhdGlvbiAqL1xuLmpzLWZvY3VzLXZpc2libGUgLmJ0bjpmb2N1czpub3QoLmZvY3VzLXZpc2libGUpIHtcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxuXG4uaWNvbi1iaWcge1xuICBmb250LXNpemU6IDMycHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjN2JkMzg5O1xuICBjb2xvcjogIzdiZDM4OTtcbiAgcGFkZGluZzogMTBweCAxMXB4IDEwcHggMTBweDsgfVxuXG5yc3otbGF5b3V0LmNlbGwge1xuICBwYWRkaW5nOiAxZW0gMS43NWVtOyB9XG4gIHJzei1sYXlvdXQuY2VsbC5vbmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICByc3otbGF5b3V0LmNlbGwudHdvIHtcbiAgICBiYWNrZ3JvdW5kOiAjN2JkMzg5OyB9XG4gIHJzei1sYXlvdXQuY2VsbC50aHJlZSB7XG4gICAgYmFja2dyb3VuZDogIzM4ZTRhZTsgfVxuICByc3otbGF5b3V0LmNlbGwuZm91ciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgdXJsKFwiaHR0cHM6Ly93d3cuZGVzaWducnVzaC5jb20vcmVzb3VyY2VzL3B1YmxpY2RvbWFpbmFyY2hpdmUvL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzEyL3B1YmxpYy1kb21haW4taW1hZ2VzLWZyZWUtc3RvY2stcGhvdG9zLWhpZ2gtcXVhbGl0eS1yZXNvbHV0aW9uLWRvd25sb2Fkcy1wdWJsaWMtZG9tYWluLWFyY2hpdmUtNy0xMDAweDY2NS5qcGdcIik7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.cols = false;
        this.cells = {
            a: 'bottom',
            a1: 'right',
            a2: 'right',
            b: 'none',
            b1: 'right',
            b2: 'none'
        };
        this.app = __webpack_require__(/*! ngx-resizable/package.json */ "./dist/ngx-resizable/package.json");
        this.title = this.app.name;
        this.version = this.app.version;
        console.log('Demo of ngx-resizable:', this.version);
    }
    AppComponent.prototype.toggleDirection = function () {
        this.cols = !this.cols;
        if (this.cols) {
            this.cells.a = 'right';
            this.cells.a1 = 'bottom';
            this.cells.b1 = 'bottom';
        }
        else {
            this.cells.a = 'bottom';
            this.cells.a1 = 'right';
            this.cells.b1 = 'right';
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _3dgenomes_ngx_resizable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @3dgenomes/ngx-resizable */ "./node_modules/@3dgenomes/ngx-resizable/fesm5/ngx-resizable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _3dgenomes_ngx_resizable__WEBPACK_IMPORTED_MODULE_3__["NgxResizableModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Mike/GitHub/ngx-resizable/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map