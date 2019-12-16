(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-from-compas-drive-dialog/add-from-compas-drive-dialog.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-from-compas-drive-dialog/add-from-compas-drive-dialog.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"relative-box\">\n        <span class=\"dialog-title\" mat-dialog-title>Attach Files</span>\n      </div>\n      <mat-dialog-content class=\"mat-typography\">\n        <div class=\"drive-content\">\n          <div class=\"search-box\">\n            <input type=\"search\" class=\"form-control custom-search\" placeholder=\"Search\" [(ngModel)]=\"filterData\" #filterText\n              (keyup)=\"filterSearch(filterText.value)\" (change)=\"filterSearch(filterText.value)\">\n          </div>\n          <div> <a style=\"float:right; margin:1em;\" href=\"javascript:\" (click)=\"initialService()\">My Library</a></div>\n          <div class=\"breadcrumb-container\" *ngIf=\"folderFiltered.length===0 && fileFiltered.length===0\">\n            <ul class=\"breadcrumb\">\n              <li class=\"before-icon\">\n                <i class=\"vertical-align-middle padding-bottom-3\"></i>\n                <a href=\"javascript:\" (click)=\"ngOnInit()\" [style.vertical-align]=\"'middle'\">Drive</a>\n              </li>\n              <li class=\"before-icon\" *ngFor=\"let brd of breadCrumb; let i=index\">\n                <i class=\"material-icons vertical-align-middle padding-bottom-3\">keyboard_arrow_right</i>\n                <a href=\"javascript:\" *ngIf=\"breadCrumb.length - 1 !== i\"\n                  (click)=\"onSelectionChange(brd); gotoBreadCrumb(i)\">{{brd.name}}</a>\n                <a href=\"javascript:\" *ngIf=\"breadCrumb.length - 1 === i\">{{brd.name}}</a>\n              </li>\n            </ul>\n          </div>\n          <!-- <app-folder-file-tree [filterKey]=\"filterText.value\"></app-folder-file-tree> -->\n          <div class=\"folder-list-filtered filter-list\" *ngIf=\"folderFiltered.length>0\">\n            <span>Folders Found</span>\n            <app-data-file-list [fileFolderTree]=\"folderFiltered\" [checkAll]=\"checkAll\" (selected)=\"onSelectionChange($event)\"\n              (checked)=\"onChecked($event)\"></app-data-file-list>\n          </div>\n          <div class=\"file-list-filtered filter-list\" *ngIf=\"fileFiltered.length>0\">\n            <span>Files Found</span>\n            <app-data-file-list [fileFolderTree]=\"fileFiltered\" [checkAll]=\"checkAll\" (selected)=\"onSelectionChange($event)\"\n              (checked)=\"onChecked($event)\"></app-data-file-list>\n          </div>\n          <div *ngIf=\"folderFiltered.length===0 && fileFiltered.length===0\">\n            <app-data-file-list [fileFolderTree]=\"tableData\" [checkAll]=\"checkAll\" (selected)=\"onSelectionChange($event)\"\n              (checked)=\"onChecked($event)\" *ngIf=\"filterData===''\"></app-data-file-list>\n          </div>\n          <div class=\"loading-container\" *ngIf=\"loading\">\n            <div class=\"loader\"></div>\n          </div>\n        </div>\n      </mat-dialog-content>\n      <mat-dialog-actions align=\"end\">\n        <div class=\"dialog-footer\">\n          <button class=\"btn btn-custom bg-white\" mat-button [mat-dialog-close]=\"true\">\n            Cancel\n          </button>\n          <button class=\"btn btn-custom send-color\" (click)=\"addSelected()\" mat-button>\n            Add Selected\n          </button>\n        </div>\n      </mat-dialog-actions>\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/data-file-list/data-file-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/data-file-list/data-file-list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive drive-content\">\n        <table class=\"table table-borderless\">\n      \n          <!-- <tr *ngIf=\"fileFolderTree.length === 0\">\n            <td colspan=\"9\" class=\"empty-text\">Empty folder</td>\n          </tr> -->\n          <thead>\n            <tr>\n              <th></th>\n              <th>Name&nbsp;\n                <span class=\"sort-icon\" (click)=\"asc = !asc;sort(0, asc)\">\n                  <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                </span></th>\n              <th>Last Modified&nbsp;\n                <span class=\"sort-icon\" (click)=\"asc = !asc;sort(1, asc)\">\n                  <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                </span></th>\n              <th>Type&nbsp;\n                <span class=\"sort-icon\" (click)=\"asc = !asc;sort(2, asc)\">\n                  <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                </span></th>\n            </tr>\n          </thead>\n          <tr *ngFor=\"let item of fileFolderTree; let i=index\">\n            <td class=\"width-20\">\n              <div *ngIf=\"item.type === 'file'\">\n                <label class=\"container-c\">\n                  <!-- <input type=\"checkbox\"> -->\n                  <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"item.checked\">\n                  <span class=\"checkmark\"></span>\n                </label>\n                <!-- [checked]=\"bool\" [value]=\"bool\" -->\n              </div>\n              <i class=\"folder-icon material-icons vertical-align-middle padding-bottom-3\"\n                *ngIf=\"item.type !== 'lineItem-revit' && item.type !== 'file'\">folder</i>\n            </td>\n            <td *ngIf=\"item.type === 'file'\" class=\"file-column\">\n              <!-- <i class=\"fa fa-caret-right grey-text\" aria-hidden=\"true\" ></i> -->\n              <!-- <img width=18 [src]=\"getIconFile(item.url)\" alt=\"\" *ngIf=\"isNativeViewer(item.url)\"> -->\n              <i [className]=\"item.iconClass\"></i>&nbsp;\n              <!-- <a [href]=\"item.url\" target=\"_blank\" class=\"folder-name\" *ngIf=\"!isNativeViewer(item.url)\" download>{{item.title}}</a> -->\n              <a [href]=\"item.url\" target=\"_blank\" class=\"folder-name\" download>{{item.title}}</a>\n            </td>\n            <td *ngIf=\"item.type !== 'file'\">\n              <!-- <i class=\"fa fa-caret-right grey-text\" aria-hidden=\"true\"></i> -->\n              <img width=18 src=\"assets/icons/rvt-icon.png\" alt=\"\" *ngIf=\"item.type === 'lineItem-revit'\">\n              <a href=\"javascript:\" class=\"folder-name\" (click)=\"onSelected(item)\"\n                *ngIf=\"item.type !== 'lineItem-revit'\">{{item.name}}</a>\n              <a href=\"javascript:\" class=\"folder-name\" *ngIf=\"item.type === 'lineItem-revit'\">{{item.name}}</a>\n            </td>\n            <td *ngIf=\"item.sName\">\n              {{item.sName}}\n            </td>\n            <td class=\"light-text-8\">\n              <span>{{item.modifiedDate | date}}</span>\n            </td>\n            <td class=\"light-text-8\">\n              <span *ngIf=\"item.type !== 'file'\">Folder</span>\n              <span *ngIf=\"item.type === 'file'\">{{item.typeName}}</span>\n            </td>\n          </tr>\n        </table>\n      </div>\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pss-config/pss-config.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pss-config/pss-config.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- <div class=\"header\" style=\"float: left\">\n                <button mat-stroked-button color=\"primary\"><i class=\"material-icons\">\n                        arrow_back_ios\n                    </i> Previous</button>\n            </div>\n            <div class=\"header\" style=\"float: right\">\n                    <button mat-stroked-button color=\"primary\">Next <i class=\"material-icons\">\n                            navigate_next\n                        </i></button>\n                </div>\n        <div class=\"fluid\">\n            <mat-tab-group mat-align-tabs=\"center\">\n                <mat-tab label=\"Device Input\">\n                    <mat-card class=\"container-fluid row\">\n                        <div class=\"col-md-4\">\n                            Enter the Devices value here:\n                        </div>\n                        <div class=\"col-md-8 details\">\n                            Total Devices: <strong>32</strong>&nbsp;&nbsp;&nbsp;\n                            Label Totals: <strong>7</strong>\n                        </div>\n                        <div class=\"col-md-12\">\n                                <table class=\"container-fluid breaker-details\">\n                                        <tr>\n                                            <th>Drawing or Customer Reference</th>\n                                            <th>MV Beaker</th>\n                                            <th>MV Fuses</th>\n                                            <th>MV Trans</th>\n                                            <th>MV Motors</th>\n                                            <th>MV Cabs</th>\n                                            <th>LV SW /Fuse</th>\n                                            <th>LV Adj Breaker</th>\n                                            <th>LV Non Adj Breaker</th>\n                                            <th>LV Trans</th>\n                                            <th>LV Panel > 100</th>\n                                            <th>LV Panel > 50</th>\n                                            <th>LV CP</th>\n                                            <th>Genset</th>\n                                        </tr>\n                                    </table>\n                        </div>\n                    </mat-card>\n                </mat-tab>\n                <mat-tab label=\"Choose studies\">Content 2</mat-tab>\n                <mat-tab label=\"Service Form\">Content 3</mat-tab>\n            </mat-tab-group>\n        </div> -->\n\n    <mat-horizontal-stepper #stepper>\n        <mat-step>\n            <ng-template matStepLabel>Device Input</ng-template>\n            <mat-card class=\"container-fluid\">\n                <div class=\"container-fluid row\">\n                    <div class=\"col-md-4 col-lg-4\" style=\"padding-top: 12px\">\n                        Enter the Devices value here:\n                    </div>\n                    <div class=\"col-md-7 col-lg-7 details\" style=\"padding-top: 12px\">\n                        Total Devices: <strong>32</strong>&nbsp;&nbsp;&nbsp;\n                        Label Totals: <strong>7</strong>\n                    </div>\n                    <div class=\"col-md-1 col-lg-1\" style=\"padding-top: 0px\">\n                        <button mat-button matStepperNext>Next</button>\n                    </div>\n                </div>\n                <mat-divider></mat-divider>\n                <br>\n                <div class=\"container-fluid\">\n                    <table class=\"breaker-details\" *ngIf=\"drawings && drawings.files\">\n                        <tr>\n                            <th class=\"document\">Drawing or Customer Reference</th>\n                            <th class=\"devices\">MV Beaker</th>\n                            <th class=\"devices\">MV Fuses</th>\n                            <th class=\"devices\">MV Trans</th>\n                            <th class=\"devices\">MV Motors</th>\n                            <th class=\"devices\">MV Cabs</th>\n                            <th class=\"devices\">LV SW /Fuse</th>\n                            <th class=\"devices\">LV Adj Breaker</th>\n                            <th class=\"devices\">LV Non Adj Breaker</th>\n                            <th class=\"devices\">LV Trans</th>\n                            <th class=\"devices\">LV Panel > 100</th>\n                            <th class=\"devices\">LV Panel > 50</th>\n                            <th class=\"devices\">LV CP</th>\n                            <th class=\"devices\">Genset</th>\n                        </tr>\n                        <tr *ngFor=\"let dwg of drawings.files\">\n                            <td class=\"document\" [style.background-color]=\"dwg.loading && dwg.loading !== 100 ? '#a4dbefa8' : 'transparent'\">\n                                    <div class=\"file-list-progress-back\" [style.width]=\"(dwg.loading *2) + 'px'\" *ngIf=\"dwg.loading && dwg.loading !== 100\"></div>\n                                <a [href]=\"dwg.url\" target=\"_blank\">{{dwg.title}}</a></td>\n                            <td class=\"devices\"><input class=\"form-control\" type=\"number\"\n                                    [(ngModel)]=\"dwg.device.mv_breaker\" (input)=\"updateTotal()\" min=\"0\"></td>\n                            <td class=\"devices\"><input class=\"form-control\" type=\"number\"\n                                    [(ngModel)]=\"dwg.device.mv_fuses\" (input)=\"updateTotal()\" min=\"0\"></td>\n                            <td class=\"devices\"><input class=\"form-control\" type=\"number\"\n                                    [(ngModel)]=\"dwg.device.mv_trans\" (input)=\"updateTotal()\" min=\"0\"></td>\n                            <td class=\"devices\"><input class=\"form-control\" type=\"number\"\n                                    [(ngModel)]=\"dwg.device.mv_motor\" (input)=\"updateTotal()\" min=\"0\"></td>\n                            <td class=\"devices\"><input class=\"form-control\" type=\"number\"\n                                    [(ngModel)]=\"dwg.device.mv_cabs\" (input)=\"updateTotal()\" min=\"0\"></td>\n                            <td class=\"devices\"><input class=\"form-control\" type=\"number\"\n                                    [(ngModel)]=\"dwg.device.lv_sw_fuse\" (input)=\"updateTotal()\" min=\"0\"></td>\n                            <td class=\"devices\"><input class=\"form-control\" type=\"number\"\n                                    [(ngModel)]=\"dwg.device.lv_adj_brk\" (input)=\"updateTotal()\" min=\"0\"></td>\n                            <td class=\"devices\"><input class=\"form-control\" type=\"number\"\n                                    [(ngModel)]=\"dwg.device.lv_non_adj_brk\" (input)=\"updateTotal()\" min=\"0\"></td>\n                            <td class=\"devices\"><input class=\"form-control\" type=\"number\"\n                                    [(ngModel)]=\"dwg.device.lv_trans\" (input)=\"updateTotal()\" min=\"0\"></td>\n                            <td class=\"devices\"><input class=\"form-control\" type=\"number\"\n                                    [(ngModel)]=\"dwg.device.lv_pan_100\" (input)=\"updateTotal()\" min=\"0\"></td>\n                            <td class=\"devices\"><input class=\"form-control\" type=\"number\"\n                                    [(ngModel)]=\"dwg.device.lv_pan_50\" (input)=\"updateTotal()\" min=\"0\"></td>\n                            <td class=\"devices\"><input class=\"form-control\" type=\"number\" [(ngModel)]=\"dwg.device.lv_cp\"\n                                    (input)=\"updateTotal()\" min=\"0\"></td>\n                            <td class=\"devices\"><input class=\"form-control\" type=\"number\"\n                                    [(ngModel)]=\"dwg.device.genset\" (input)=\"updateTotal()\" min=\"0\"></td>\n\n                        </tr>\n                        <tr class=\"add-new\">\n                            <td class=\"document\">\n                                <button mat-button [matMenuTriggerFor]=\"aboveMenu\">\n                                    <i class=\"material-icons\">\n                                        add_circle\n                                    </i> Add more Drawing Reference</button>\n                                <mat-menu #aboveMenu=\"matMenu\" yPosition=\"above\">\n                                    <button mat-menu-item (click)=\"openAddFromCompasDriveDialog()\"> <i\n                                            class=\"material-icons\" style=\"vertical-align: middle\">\n                                            cloud\n                                        </i> From Compas Drive</button>\n                                    <label mat-menu-item><i class=\"material-icons\" style=\"vertical-align: middle\">\n                                            desktop_windows\n                                        </i> From Local\n                                            <input multiple type=\"file\" id=\"fileInput\"\n                                            size=\"60\" name=\"fileInput\" (change)=\"fileChange($event)\" style=\"display:none\">\n\n                                        \n                                        </label>\n                                    <button mat-menu-item (click)=\"scanDocument()\"><i class=\"material-icons\" style=\"vertical-align: middle\">\n                                            compare\n                                        </i> Scan for document</button>\n                                </mat-menu>\n                            </td>\n                            <td class=\"devices\"></td>\n                            <td class=\"devices\"></td>\n                            <td class=\"devices\"></td>\n                            <td class=\"devices\"></td>\n                            <td class=\"devices\"></td>\n                            <td class=\"devices\"></td>\n                            <td class=\"devices\"></td>\n                            <td class=\"devices\"></td>\n                            <td class=\"devices\"></td>\n                            <td class=\"devices\"></td>\n                            <td class=\"devices\"></td>\n                            <td class=\"devices\"></td>\n                            <td class=\"devices\"></td>\n\n                        </tr>\n                        <tr>\n                            <th class=\"document\">Each Device Total (sum all)</th>\n                            <th class=\"devices\">{{total.mv_breaker}}</th>\n                            <th class=\"devices\">{{total.mv_fuses}}</th>\n                            <th class=\"devices\">{{total.mv_trans}}</th>\n                            <th class=\"devices\">{{total.mv_motor}}</th>\n                            <th class=\"devices\">{{total.mv_cabs}}</th>\n                            <th class=\"devices\">{{total.lv_sw_fuse}}</th>\n                            <th class=\"devices\">{{total.lv_adj_brk}}</th>\n                            <th class=\"devices\">{{total.lv_non_adj_brk}}</th>\n                            <th class=\"devices\">{{total.lv_trans}}</th>\n                            <th class=\"devices\">{{total.lv_pan_100}}</th>\n                            <th class=\"devices\">{{total.lv_pan_50}}</th>\n                            <th class=\"devices\">{{total.lv_cp}}</th>\n                            <th class=\"devices\">{{total.genset}}</th>\n                        </tr>\n                    </table>\n                </div>\n\n            </mat-card>\n        </mat-step>\n        <mat-step>\n            <ng-template matStepLabel>Choose Studies</ng-template>\n            <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button matStepperNext>Next</button>\n            </div>\n        </mat-step>\n        <mat-step>\n            <ng-template matStepLabel>Service Form</ng-template>\n            <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button matStepperNext>Next</button>\n            </div>\n        </mat-step>\n    </mat-horizontal-stepper>\n</div>"

/***/ }),

/***/ "./src/app/_constants/app-name.ts":
/*!****************************************!*\
  !*** ./src/app/_constants/app-name.ts ***!
  \****************************************/
/*! exports provided: AppName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppName", function() { return AppName; });
var AppName = /** @class */ (function () {
    function AppName() {
    }
    Object.defineProperty(AppName, "word", {
        get: function () { return 'word'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName, "powerpoint", {
        get: function () { return 'powerpoint'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName, "excel", {
        get: function () { return 'excel'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName, "visio", {
        get: function () { return 'visio'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName, "access", {
        get: function () { return 'access'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName, "project", {
        get: function () { return 'project'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName, "publisher", {
        get: function () { return 'publisher'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName, "spd", {
        get: function () { return 'spd'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName, "pdf", {
        get: function () { return 'pdf'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName, "fbx", {
        get: function () { return 'fbx'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName, "dae", {
        get: function () { return 'dae'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName, "obj", {
        get: function () { return 'obj'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName, "infopath", {
        get: function () { return 'infopath'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName, "sharecad", {
        get: function () { return 'sharecad'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName, "text", {
        get: function () { return 'text'; },
        enumerable: true,
        configurable: true
    });
    return AppName;
}());



/***/ }),

/***/ "./src/app/_constants/app.constants.ts":
/*!*********************************************!*\
  !*** ./src/app/_constants/app.constants.ts ***!
  \*********************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
var AppConstants = /** @class */ (function () {
    function AppConstants() {
    }
    Object.defineProperty(AppConstants, "userAgentAndroid", {
        get: function () { return 'android'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConstants, "userAgentIphone", {
        get: function () { return 'iphone'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConstants, "userAgentIpad", {
        get: function () { return 'ipad'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConstants, "userAgentCompasAR", {
        get: function () { return 'compasar'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConstants, "userAgentUWP", {
        get: function () { return 'uwp'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConstants, "userAgentWindows", {
        get: function () { return 'windows'; },
        enumerable: true,
        configurable: true
    });
    return AppConstants;
}());



/***/ }),

/***/ "./src/app/_constants/filte-types.ts":
/*!*******************************************!*\
  !*** ./src/app/_constants/filte-types.ts ***!
  \*******************************************/
/*! exports provided: FileTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTypes", function() { return FileTypes; });
var FileTypes = /** @class */ (function () {
    function FileTypes() {
    }
    Object.defineProperty(FileTypes, "typeExtensions", {
        get: function () {
            // add extensions in uppercase
            return [
                { app: 'word', typeName: 'Microsoft Word Document', extensions: ['DOC', 'DOCX', 'RTF'] },
                { app: 'powerpoint', typeName: 'Microsoft Powerpoint Presentation', extensions: ['PPTX', 'PPT', 'PPTM'] },
                { app: 'excel', typeName: 'Microsoft Excel Worksheet', extensions: ['XLS', 'XLSX'] },
                { app: 'visio', typeName: 'Microsoft Visio File', extensions: ['VSDX', 'VSDM', 'VSSX', 'VSSM', 'VSTX', 'VSTM'] },
                { app: 'access', typeName: 'Microsoft Access Database', extensions: ['ACCDB', 'ADP'] },
                { app: 'project', typeName: 'Microsoft Project File', extensions: ['MPP'] },
                { app: 'publisher', typeName: 'Microsoft Publisher File', extensions: ['PUB'] },
                { app: 'spd', typeName: 'Microsoft Word Document', extensions: ['SPD'] },
                { app: 'pdf', typeName: 'PDF File', extensions: ['PDF'] },
                { app: 'fbx', typeName: 'FBX Model', extensions: ['FBX'] },
                { app: 'dae', typeName: 'FBX Model', extensions: ['DAE'] },
                { app: 'obj', typeName: 'FBX Model', extensions: ['OBJ'] },
                { app: 'text', typeName: 'Text File', extensions: ['TXT'] },
                { app: 'sharecad', typeName: 'Sharecad',
                    extensions: [
                        'DWG',
                        'DXF',
                        'DWF',
                        'HPGL',
                        'PLT',
                        'TIFF',
                        'TGA',
                        'CAL',
                        'STEP',
                        'STP',
                        'IGES',
                        'IGS',
                        'BREP',
                        'STL',
                        'SAT ',
                        'X_T',
                        'X_B',
                        'SLDPRT'
                    ] },
            ];
        },
        enumerable: true,
        configurable: true
    });
    return FileTypes;
}());

// { app: 'sharecad', typeName: 'Sharecad',
// extensions: ['DWG', 'DXF', 'DWF', 'HPGL', 'PLT', 'TIFF', 'TGA', 'CAL', 'STEP', 'STP', 'IGES', 'IGS', 'BREP', 'STL', 'SAT ']},


/***/ }),

/***/ "./src/app/_constants/icon-files.ts":
/*!******************************************!*\
  !*** ./src/app/_constants/icon-files.ts ***!
  \******************************************/
/*! exports provided: IconFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconFiles", function() { return IconFiles; });
var IconFiles = /** @class */ (function () {
    function IconFiles() {
    }
    Object.defineProperty(IconFiles, "fbx", {
        get: function () { return 'assets/icons/2689-512.png'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconFiles, "dae", {
        get: function () { return 'assets/icons/2683-512.png'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconFiles, "sharecad", {
        get: function () { return 'assets/icons/411714-200.png'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconFiles, "general", {
        get: function () { return 'assets/icons/general.png'; },
        enumerable: true,
        configurable: true
    });
    return IconFiles;
}());



/***/ }),

/***/ "./src/app/_constants/icon-fonts.ts":
/*!******************************************!*\
  !*** ./src/app/_constants/icon-fonts.ts ***!
  \******************************************/
/*! exports provided: IconFonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconFonts", function() { return IconFonts; });
var IconFonts = /** @class */ (function () {
    function IconFonts() {
    }
    Object.defineProperty(IconFonts, "word", {
        get: function () { return 'file-icon fa fa-file-word-o'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconFonts, "pdf", {
        get: function () { return 'file-icon fa fa-file-pdf-o'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconFonts, "image", {
        get: function () { return 'file-icon fa fa-file-image-o'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconFonts, "excel", {
        get: function () { return 'file-icon fa fa-file-excel-o'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconFonts, "powerpoint", {
        get: function () { return 'file-icon fa fa-file-powerpoint-o'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconFonts, "commonFile", {
        get: function () { return 'file-icon fa fa-file'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconFonts, "text", {
        get: function () { return 'file-icon fa fa-file-text-o'; },
        enumerable: true,
        configurable: true
    });
    return IconFonts;
}());



/***/ }),

/***/ "./src/app/_constants/index.ts":
/*!*************************************!*\
  !*** ./src/app/_constants/index.ts ***!
  \*************************************/
/*! exports provided: MiscStatic, UserRole, ItemTypes, AppConstants, AppName, IconFiles, IconFonts, Viewers, FileTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _misc_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc-static */ "./src/app/_constants/misc-static.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiscStatic", function() { return _misc_static__WEBPACK_IMPORTED_MODULE_0__["MiscStatic"]; });

/* harmony import */ var _user_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-role */ "./src/app/_constants/user-role.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return _user_role__WEBPACK_IMPORTED_MODULE_1__["UserRole"]; });

/* harmony import */ var _item_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-types */ "./src/app/_constants/item-types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemTypes", function() { return _item_types__WEBPACK_IMPORTED_MODULE_2__["ItemTypes"]; });

/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.constants */ "./src/app/_constants/app.constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return _app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"]; });

/* harmony import */ var _app_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-name */ "./src/app/_constants/app-name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppName", function() { return _app_name__WEBPACK_IMPORTED_MODULE_4__["AppName"]; });

/* harmony import */ var _icon_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon-files */ "./src/app/_constants/icon-files.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFiles", function() { return _icon_files__WEBPACK_IMPORTED_MODULE_5__["IconFiles"]; });

/* harmony import */ var _icon_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon-fonts */ "./src/app/_constants/icon-fonts.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFonts", function() { return _icon_fonts__WEBPACK_IMPORTED_MODULE_6__["IconFonts"]; });

/* harmony import */ var _viewers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewers */ "./src/app/_constants/viewers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Viewers", function() { return _viewers__WEBPACK_IMPORTED_MODULE_7__["Viewers"]; });

/* harmony import */ var _filte_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filte-types */ "./src/app/_constants/filte-types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypes", function() { return _filte_types__WEBPACK_IMPORTED_MODULE_8__["FileTypes"]; });












/***/ }),

/***/ "./src/app/_constants/item-types.ts":
/*!******************************************!*\
  !*** ./src/app/_constants/item-types.ts ***!
  \******************************************/
/*! exports provided: ItemTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTypes", function() { return ItemTypes; });
var ItemTypes = /** @class */ (function () {
    function ItemTypes() {
    }
    Object.defineProperty(ItemTypes, "global", {
        get: function () { return 'global'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "qrcode", {
        get: function () { return 'qrcode'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "revit", {
        get: function () { return 'revit'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "pmo", {
        get: function () { return 'pmo'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "map", {
        get: function () { return 'map'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "lineItem", {
        get: function () { return 'lineItem'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "fbxmodels", {
        get: function () { return 'fbxmodels'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "submittal", {
        get: function () { return 'submittal'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "installationOnm", {
        get: function () { return 'installationOnm'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "approvalDnR", {
        get: function () { return 'approvalDnR'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "lineItemRevit", {
        get: function () { return 'lineItem-revit'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "file", {
        get: function () { return 'file'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "folder", {
        get: function () { return 'folder'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "ONM", {
        get: function () { return 'ONM'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "DWG", {
        get: function () { return 'DWG'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "fbx", {
        get: function () { return 'fbx'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "planDrawings", {
        get: function () { return 'planDrawings'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemTypes, "lineItemplanDrawings", {
        get: function () { return 'lineItem-planDrawings'; },
        enumerable: true,
        configurable: true
    });
    return ItemTypes;
}());



/***/ }),

/***/ "./src/app/_constants/misc-static.ts":
/*!*******************************************!*\
  !*** ./src/app/_constants/misc-static.ts ***!
  \*******************************************/
/*! exports provided: MiscStatic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscStatic", function() { return MiscStatic; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

var MiscStatic = /** @class */ (function () {
    function MiscStatic() {
    }
    Object.defineProperty(MiscStatic, "rootFolderId", {
        get: function () {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].envName === 'prod') {
                return '253107';
            }
            else {
                return '127163541';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiscStatic, "rootAppName", {
        get: function () {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].envName === 'prod') {
                return 'Compas_SQR';
            }
            else {
                return 'Compas_DCC';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiscStatic, "rootPathName", {
        get: function () {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].envName === 'prod') {
                return 'Compas_SQR';
            }
            else {
                return 'COMPAS_DCC';
            }
        },
        enumerable: true,
        configurable: true
    });
    return MiscStatic;
}());



/***/ }),

/***/ "./src/app/_constants/user-role.ts":
/*!*****************************************!*\
  !*** ./src/app/_constants/user-role.ts ***!
  \*****************************************/
/*! exports provided: UserRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return UserRole; });
var UserRole = /** @class */ (function () {
    function UserRole() {
    }
    Object.defineProperty(UserRole, "pmoAllowedRole", {
        get: function () { return ['BU17_Proj_Mgmt_Office']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRole, "pmoAllowedId", {
        get: function () { return ['KRISNX']; },
        enumerable: true,
        configurable: true
    });
    return UserRole;
}());



/***/ }),

/***/ "./src/app/_constants/viewers.ts":
/*!***************************************!*\
  !*** ./src/app/_constants/viewers.ts ***!
  \***************************************/
/*! exports provided: Viewers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewers", function() { return Viewers; });
var Viewers = /** @class */ (function () {
    function Viewers() {
    }
    Object.defineProperty(Viewers, "sharecad", {
        get: function () { return 'sharecad'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewers, "fbx", {
        get: function () { return 'fbx'; },
        enumerable: true,
        configurable: true
    });
    return Viewers;
}());



/***/ }),

/***/ "./src/app/_helpers/token.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/token.interceptor.ts ***!
  \***********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
        //this.st_token = window.frames.localStorage.getItem("stToken");
        this.st_token = 'ST-14-aslLoeheYN3nQA9ZWaL0-compasd01';
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        if (request.headers.has('c3')) {
            request = request.clone({
                headers: request.headers.delete('c3')
            });
            // request = request.clone({
            //     setHeaders: {
            //         'userId':  localStorage.getItem('userId'),
            //         'userName': localStorage.getItem('name'),
            //         // 'Content-Type': 'application/json',
            //         'st_token': this.st_token
            //     }
            // });
            request = request.clone({
                setHeaders: {
                    'userId': 'krisnx',
                    'userName': 'Siemens User 161',
                    // 'Content-Type': 'application/json',
                    'st_token': this.st_token
                }
            });
        }
        else {
            request = request.clone({
                setHeaders: {
                    'st_token': this.st_token
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/_models/file-folder-tree.ts":
/*!*********************************************!*\
  !*** ./src/app/_models/file-folder-tree.ts ***!
  \*********************************************/
/*! exports provided: FileFolderTree, StaticFolderPMO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFolderTree", function() { return FileFolderTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticFolderPMO", function() { return StaticFolderPMO; });
var FileFolderTree = /** @class */ (function () {
    function FileFolderTree() {
    }
    return FileFolderTree;
}());

var StaticFolderPMO = /** @class */ (function () {
    function StaticFolderPMO() {
    }
    return StaticFolderPMO;
}());



/***/ }),

/***/ "./src/app/_models/file-folder.ts":
/*!****************************************!*\
  !*** ./src/app/_models/file-folder.ts ***!
  \****************************************/
/*! exports provided: FileFolder, FolderData, FileData, FileDevice, FileFolderTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFolder", function() { return FileFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderData", function() { return FolderData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileData", function() { return FileData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDevice", function() { return FileDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFolderTable", function() { return FileFolderTable; });
var FileFolder = /** @class */ (function () {
    function FileFolder() {
    }
    return FileFolder;
}());

var FolderData = /** @class */ (function () {
    function FolderData() {
    }
    return FolderData;
}());

var FileData = /** @class */ (function () {
    function FileData() {
    }
    return FileData;
}());

var FileDevice = /** @class */ (function () {
    function FileDevice() {
        this.mv_breaker = 0;
        this.mv_fuses = 0;
        this.mv_trans = 0;
        this.mv_motor = 0;
        this.mv_cabs = 0;
        this.lv_sw_fuse = 0;
        this.lv_adj_brk = 0;
        this.lv_non_adj_brk = 0;
        this.lv_trans = 0;
        this.lv_pan_100 = 0;
        this.lv_pan_50 = 0;
        this.lv_cp = 0;
        this.genset = 0;
    }
    return FileDevice;
}());

var FileFolderTable = /** @class */ (function () {
    function FileFolderTable() {
    }
    return FileFolderTable;
}());

var Versions = /** @class */ (function () {
    function Versions() {
    }
    return Versions;
}());


/***/ }),

/***/ "./src/app/_models/file-versions.ts":
/*!******************************************!*\
  !*** ./src/app/_models/file-versions.ts ***!
  \******************************************/
/*! exports provided: FileVersionsRespnse, FileVersions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileVersionsRespnse", function() { return FileVersionsRespnse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileVersions", function() { return FileVersions; });
var FileVersionsRespnse = /** @class */ (function () {
    function FileVersionsRespnse() {
    }
    return FileVersionsRespnse;
}());

var FileVersions = /** @class */ (function () {
    function FileVersions() {
    }
    return FileVersions;
}());

var Attributes = /** @class */ (function () {
    function Attributes() {
    }
    return Attributes;
}());


/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: FileFolder, FolderData, FileData, FileDevice, FileFolderTable, FileFolderTree, StaticFolderPMO, FileVersionsRespnse, FileVersions, UserDetails, UserPermission, StaticEnv, NewFolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-folder */ "./src/app/_models/file-folder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileFolder", function() { return _file_folder__WEBPACK_IMPORTED_MODULE_0__["FileFolder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FolderData", function() { return _file_folder__WEBPACK_IMPORTED_MODULE_0__["FolderData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileData", function() { return _file_folder__WEBPACK_IMPORTED_MODULE_0__["FileData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileDevice", function() { return _file_folder__WEBPACK_IMPORTED_MODULE_0__["FileDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileFolderTable", function() { return _file_folder__WEBPACK_IMPORTED_MODULE_0__["FileFolderTable"]; });

/* harmony import */ var _file_folder_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-folder-tree */ "./src/app/_models/file-folder-tree.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileFolderTree", function() { return _file_folder_tree__WEBPACK_IMPORTED_MODULE_1__["FileFolderTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticFolderPMO", function() { return _file_folder_tree__WEBPACK_IMPORTED_MODULE_1__["StaticFolderPMO"]; });

/* harmony import */ var _file_versions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-versions */ "./src/app/_models/file-versions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileVersionsRespnse", function() { return _file_versions__WEBPACK_IMPORTED_MODULE_2__["FileVersionsRespnse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileVersions", function() { return _file_versions__WEBPACK_IMPORTED_MODULE_2__["FileVersions"]; });

/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-data */ "./src/app/_models/user-data.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return _user_data__WEBPACK_IMPORTED_MODULE_3__["UserDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPermission", function() { return _user_data__WEBPACK_IMPORTED_MODULE_3__["UserPermission"]; });

/* harmony import */ var _static_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static-env */ "./src/app/_models/static-env.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticEnv", function() { return _static_env__WEBPACK_IMPORTED_MODULE_4__["StaticEnv"]; });

/* harmony import */ var _new_folder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-folder */ "./src/app/_models/new-folder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewFolder", function() { return _new_folder__WEBPACK_IMPORTED_MODULE_5__["NewFolder"]; });









/***/ }),

/***/ "./src/app/_models/new-folder.ts":
/*!***************************************!*\
  !*** ./src/app/_models/new-folder.ts ***!
  \***************************************/
/*! exports provided: NewFolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFolder", function() { return NewFolder; });
var NewFolder = /** @class */ (function () {
    function NewFolder() {
    }
    return NewFolder;
}());



/***/ }),

/***/ "./src/app/_models/static-env.ts":
/*!***************************************!*\
  !*** ./src/app/_models/static-env.ts ***!
  \***************************************/
/*! exports provided: StaticEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticEnv", function() { return StaticEnv; });
var StaticEnv = /** @class */ (function () {
    function StaticEnv() {
    }
    return StaticEnv;
}());

var Envs = /** @class */ (function () {
    function Envs() {
    }
    return Envs;
}());


/***/ }),

/***/ "./src/app/_models/user-data.ts":
/*!**************************************!*\
  !*** ./src/app/_models/user-data.ts ***!
  \**************************************/
/*! exports provided: UserDetails, UserPermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return UserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPermission", function() { return UserPermission; });
var UserDetails = /** @class */ (function () {
    function UserDetails() {
    }
    return UserDetails;
}());

var UserPermission = /** @class */ (function () {
    function UserPermission() {
    }
    return UserPermission;
}());



/***/ }),

/***/ "./src/app/_services/c3.service.ts":
/*!*****************************************!*\
  !*** ./src/app/_services/c3.service.ts ***!
  \*****************************************/
/*! exports provided: C3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C3Service", function() { return C3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _static_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static-data.service */ "./src/app/_services/static-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var C3Service = /** @class */ (function () {
    function C3Service(http, staticService) {
        this.http = http;
        this.staticService = staticService;
        this.c3ServicesFolderFiles = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'c3services/ws/services/folder/files';
        this.c3ServicesFolderFilesTest = 'assets/json/static-files-test.json';
        this.c3ServicesFileVersions = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'c3services/ws/services/d2';
        this.uploadUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'c3services/ws/services/u2';
        this.newFolderUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'c3services/ws/services/add/folder';
        this.deleteFolderUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'c3services/ws/services/delete/folder';
        this.deleteFileEntryUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'c3services/ws/services/delete/file-entry';
        this.qtInfo = JSON.parse(window.frames.sessionStorage.getItem('QUOTEINFO'));
    }
    C3Service.prototype.ngOnInit = function () {
        this.envSettings();
    };
    C3Service.prototype.envSettings = function () {
        var _this = this;
        this.staticService.getEnvironmentSettings().subscribe(function (data) {
            if (data.environment === 'production') {
                _this.rootFolderId = data.production.rootFolderId;
                _this.rootAppName = data.production.rootAppName;
                _this.rootPathName = data.production.rootPathName;
            }
            else {
                _this.rootFolderId = data.quality.rootFolderId;
                _this.rootAppName = data.quality.rootAppName;
                _this.rootPathName = data.quality.rootPathName;
            }
        });
    };
    C3Service.prototype.getPssDocument = function () {
        this.envSettings();
        var formData = {
            'applicationType': '200',
            'attributeRequired': false
        };
        formData['parentFolder'] = this.rootPathName + "/Global/PSS Documents";
        formData['path'] = this.rootPathName;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                errorMessage: 'false',
                'Content-Type': 'application/json',
                'c3': 'true'
            })
        };
        return this.http.post(this.c3ServicesFolderFiles, formData, httpOptions);
    };
    C3Service.prototype.getHomeList = function (fileName, NotAllowedFolders) {
        this.envSettings();
        var formData = {
            'applicationType': '200',
            'attributeRequired': false
        };
        if (fileName) {
            formData['parentFolder'] = this.rootPathName + "/" + fileName;
            formData['path'] = this.rootPathName + "/" + fileName;
        }
        else {
            formData['parentFolder'] = "" + this.rootPathName;
            formData['path'] = this.rootPathName;
        }
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                errorMessage: 'false',
                'Content-Type': 'application/json',
                'c3': 'true'
            })
        };
        return this.http.post(this.c3ServicesFolderFiles, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (list) {
            if (NotAllowedFolders.length !== 0) {
                list.folders = list.folders.filter(function (folder) {
                    if (!NotAllowedFolders.includes(folder.name)) {
                        return folder;
                    }
                });
            }
            return list;
        }));
        // return this.http.get<FileFolder>(this.c3ServicesFolderFilesTest);
    };
    C3Service.prototype.getChilds = function (parentId) {
        var formData = {
            'applicationType': '200',
            'folderId': parentId,
            'attributeRequired': false
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'c3': 'true'
            })
        };
        return this.http.post(this.c3ServicesFolderFiles, formData, httpOptions);
    };
    C3Service.prototype.getFileVersions = function (title, path) {
        var payload;
        var intiFolder = path.split('/')[0];
        var pathArray = path.split('/');
        if (pathArray[1] === 'Global') {
            pathArray.forEach(function (item, index) {
                if (index === 1) {
                    path = item;
                }
                else if (index > 1) {
                    path = path + '/' + item;
                }
            });
        }
        payload = {
            applicationType: '200',
            appName: "" + this.rootAppName,
            title: title,
            path: this.rootPathName + "/" + path
        };
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'c3': 'true'
        });
        return this.http.post(this.c3ServicesFileVersions, payload, { headers: httpHeaders });
    };
    C3Service.prototype.uploadFile = function (folderPath, file, fileType, comment) {
        var _this = this;
        this.envSettings();
        var payload = '';
        var intiFolder = folderPath.split('/').reverse()[0];
        payload = "{\n      'destinationLocation': '" + this.rootPathName + "/" + folderPath + "',\n      'appName': '" + this.rootAppName + "',\n      'description': 'uploaded from compas-drive',\n      'comment': '" + comment + "'\n    }";
        if (!fileType) {
            if (intiFolder === 'Global') {
                payload = "{\n          'destinationLocation': '" + this.rootPathName + "/" + intiFolder + "',\n          'appName': '" + this.rootAppName + "',\n          'description': 'uploaded from Compas-drive to global',\n          'comment': '" + comment + "'\n        }";
            }
            else {
                if (folderPath.includes('/Global/')) {
                    var Folders = folderPath.split('/');
                    folderPath = '';
                    for (var index = 1; index < Folders.length; index++) {
                        folderPath = folderPath + '/' + Folders[index];
                    }
                    payload = "{\n            'destinationLocation': '" + this.rootPathName + "/" + folderPath + "',\n            'appName': '" + this.rootAppName + "',\n            'description': 'uploaded from compas-drive to folderpath',\n            'comment': '" + comment + "'\n          }";
                }
                else {
                    payload = "{\n            'destinationLocation': '" + this.rootPathName + "/" + folderPath + "',\n            'appName': '" + this.rootAppName + "',\n            'description': 'uploaded from compas-drive to folderpath',\n            'comment': '" + comment + "'\n          }";
                }
            }
        }
        else {
            if (fileType === 'global') {
                payload = "{\n          'destinationLocation': '" + this.rootPathName + "/Global',\n          'appName': '" + this.rootAppName + "',\n          'description': 'uploaded from compas-drive to folderpath',\n          'comment': '" + comment + "'\n        }";
            }
            else {
                payload = "{\n          'destinationLocation': '" + this.rootPathName + "/" + folderPath + "',\n          'appName': '" + this.rootAppName + "',\n          'description': 'uploaded from compas-drive to folderpath',\n          'comment': '" + comment + "'\n        }";
            }
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('c3', 'loading');
        var fd = new FormData();
        fd.append('file', file);
        fd.append('attributes', payload);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.uploadUrl, fd, {
            headers: headers,
            reportProgress: true
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) { return _this.getEventMessage(event, file); }));
    };
    C3Service.prototype.getEventMessage = function (event, file) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Sent:
                return 0;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                var percentDone = Math.round(100 * event.loaded / event.total);
                return percentDone;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                return event.body;
            default:
                return 100;
        }
    };
    C3Service.prototype.getSharedData = function () {
        var quoteId = null;
        if (this.qtInfo) {
            quoteId = this.qtInfo.iD;
        }
        return quoteId;
    };
    C3Service.prototype.createFolder = function (name, parentId) {
        var fd = new FormData();
        fd.append('folderName', name);
        fd.append('parentFolderId', parentId);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'c3': 'true'
            })
        };
        return this.http.post(this.newFolderUrl, fd, httpOptions);
    };
    C3Service.prototype.deleteFolder = function (id) {
        var payload = {
            applicationType: 'CLOUD',
            appName: "" + this.rootAppName,
            folderIds: id
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'c3': 'true'
            })
        };
        return this.http.post(this.deleteFolderUrl, payload, httpOptions);
    };
    C3Service.prototype.deleteFileEntry = function (id) {
        var payload = {
            applicationType: '200',
            appName: "" + this.rootAppName,
            fileIds: id
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'c3': 'true'
            })
        };
        return this.http.post(this.deleteFileEntryUrl, payload, httpOptions);
    };
    C3Service.prototype.getProposal = function () {
        return this.http.get('assets/Documents/Proposal.jpg', { responseType: 'blob' });
    };
    C3Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _static_data_service__WEBPACK_IMPORTED_MODULE_4__["StaticDataService"] }
    ]; };
    C3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _static_data_service__WEBPACK_IMPORTED_MODULE_4__["StaticDataService"]])
    ], C3Service);
    return C3Service;
}());



/***/ }),

/***/ "./src/app/_services/file-manage.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/file-manage.service.ts ***!
  \**************************************************/
/*! exports provided: FileManageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManageService", function() { return FileManageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_constants */ "./src/app/_constants/index.ts");



var FileManageService = /** @class */ (function () {
    function FileManageService() {
    }
    FileManageService.prototype.getFileIcon = function (fileNameUrl) {
        // return font awesome icon class based on file
        var fileIcon = _constants__WEBPACK_IMPORTED_MODULE_2__["IconFonts"].commonFile;
        var fileName = fileNameUrl.toString().split('/').reverse()[0];
        var extension = fileName.includes('|a') ?
            fileName.substring(0, fileName.indexOf('|a')).split('.').reverse()[0] : fileName.split('.').reverse()[0];
        _constants__WEBPACK_IMPORTED_MODULE_2__["FileTypes"].typeExtensions.forEach(function (file) {
            if (file.app === _constants__WEBPACK_IMPORTED_MODULE_2__["AppName"].word && file.extensions.includes(extension.toUpperCase())) {
                fileIcon = _constants__WEBPACK_IMPORTED_MODULE_2__["IconFonts"].word;
            }
            else if (file.app === _constants__WEBPACK_IMPORTED_MODULE_2__["AppName"].excel && file.extensions.includes(extension.toUpperCase())) {
                fileIcon = _constants__WEBPACK_IMPORTED_MODULE_2__["IconFonts"].excel;
            }
            else if (file.app === _constants__WEBPACK_IMPORTED_MODULE_2__["AppName"].pdf && file.extensions.includes(extension.toUpperCase())) {
                fileIcon = _constants__WEBPACK_IMPORTED_MODULE_2__["IconFonts"].pdf;
            }
            else if (file.app === _constants__WEBPACK_IMPORTED_MODULE_2__["AppName"].text && file.extensions.includes(extension.toUpperCase())) {
                fileIcon = _constants__WEBPACK_IMPORTED_MODULE_2__["IconFonts"].text;
            }
        });
        return fileIcon;
    };
    FileManageService.prototype.getFileIconPath = function (fileNameUrl) {
        var fileName = fileNameUrl.toString().split('/').reverse()[0];
        var extension = fileName.split('.').reverse()[0];
        var fileIcon;
        fileIcon = _constants__WEBPACK_IMPORTED_MODULE_2__["IconFiles"].general;
        _constants__WEBPACK_IMPORTED_MODULE_2__["FileTypes"].typeExtensions.forEach(function (file) {
            if (file.app === _constants__WEBPACK_IMPORTED_MODULE_2__["AppName"].fbx && file.extensions.includes(extension.toUpperCase())) {
                fileIcon = _constants__WEBPACK_IMPORTED_MODULE_2__["IconFiles"].fbx;
            }
            else if (file.app === _constants__WEBPACK_IMPORTED_MODULE_2__["AppName"].dae && file.extensions.includes(extension.toUpperCase())) {
                fileIcon = _constants__WEBPACK_IMPORTED_MODULE_2__["IconFiles"].dae;
            }
            else if (file.app === _constants__WEBPACK_IMPORTED_MODULE_2__["AppName"].obj && file.extensions.includes(extension.toUpperCase())) {
                fileIcon = _constants__WEBPACK_IMPORTED_MODULE_2__["IconFiles"].dae;
            }
            else if (file.app === _constants__WEBPACK_IMPORTED_MODULE_2__["AppName"].sharecad && file.extensions.includes(extension.toUpperCase())) {
                fileIcon = _constants__WEBPACK_IMPORTED_MODULE_2__["IconFiles"].sharecad;
            }
        });
        // to be optimized
        if (extension.toUpperCase() === 'DWG') {
            fileIcon = 'assets/icons/323786-200.png';
        }
        else if (extension.toUpperCase() === 'DXF') {
            fileIcon = 'assets/icons/dxf-512.png';
        }
        return fileIcon;
    };
    FileManageService.prototype.getViewer = function (url) {
        var fileName = url.toString().split('/').reverse()[0];
        var extension = fileName.split('.').reverse()[0];
        var viewertype;
        _constants__WEBPACK_IMPORTED_MODULE_2__["FileTypes"].typeExtensions.forEach(function (file) {
            if (file.app === _constants__WEBPACK_IMPORTED_MODULE_2__["AppName"].sharecad && file.extensions.includes(extension.toUpperCase())) {
                viewertype = _constants__WEBPACK_IMPORTED_MODULE_2__["Viewers"].sharecad;
                // viewertype = '';
            }
            else if (file.app === _constants__WEBPACK_IMPORTED_MODULE_2__["AppName"].fbx && file.extensions.includes(extension.toUpperCase())) {
                viewertype = _constants__WEBPACK_IMPORTED_MODULE_2__["Viewers"].fbx;
            }
            else if (file.app === _constants__WEBPACK_IMPORTED_MODULE_2__["AppName"].dae && file.extensions.includes(extension.toUpperCase())) {
                viewertype = _constants__WEBPACK_IMPORTED_MODULE_2__["Viewers"].fbx;
            }
            else if (file.app === _constants__WEBPACK_IMPORTED_MODULE_2__["AppName"].obj && file.extensions.includes(extension.toUpperCase())) {
                viewertype = _constants__WEBPACK_IMPORTED_MODULE_2__["Viewers"].fbx;
            }
        });
        return viewertype;
    };
    FileManageService.prototype.getFileType = function (url) {
        var fileName = url.toString().split('/').reverse()[0];
        var extension = fileName.split('.').reverse()[0];
        var typeName = extension.toUpperCase() + " File";
        _constants__WEBPACK_IMPORTED_MODULE_2__["FileTypes"].typeExtensions.forEach(function (file) {
            if (file.extensions.includes(extension.toUpperCase())) {
                typeName = file.typeName;
            }
        });
        return typeName;
    };
    FileManageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileManageService);
    return FileManageService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: StaticDataService, C3Service, FileManageService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _c3_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c3.service */ "./src/app/_services/c3.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "C3Service", function() { return _c3_service__WEBPACK_IMPORTED_MODULE_0__["C3Service"]; });

/* harmony import */ var _static_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static-data.service */ "./src/app/_services/static-data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticDataService", function() { return _static_data_service__WEBPACK_IMPORTED_MODULE_1__["StaticDataService"]; });

/* harmony import */ var _file_manage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-manage.service */ "./src/app/_services/file-manage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileManageService", function() { return _file_manage_service__WEBPACK_IMPORTED_MODULE_2__["FileManageService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]; });







/***/ }),

/***/ "./src/app/_services/share-file.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/share-file.service.ts ***!
  \*************************************************/
/*! exports provided: ShareFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareFileService", function() { return ShareFileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_treeview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/src/index.js");




var ShareFileService = /** @class */ (function () {
    function ShareFileService() {
        this.treeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.treeState = this.treeSubject.asObservable();
        this.filFolderTree = [];
    }
    ShareFileService.prototype.getFileShare = function () {
        return this.treeState;
    };
    ShareFileService.prototype.addFile = function (file, value) {
        if (value === void 0) { value = 0; }
        this.filFolderTree.push(new ngx_treeview__WEBPACK_IMPORTED_MODULE_3__["TreeviewItem"]({
            text: file.text, value: value
        }));
        this.treeSubject.next({ updated: true, items: this.filFolderTree });
    };
    ShareFileService.prototype.removeFromTree = function (index) {
        console.log(this.filFolderTree);
        console.log(index);
    };
    ShareFileService.prototype.addProgressValue = function (fileUrl, value) {
        this.filFolderTree.map(function (item) {
            if (item.text === fileUrl) {
                item.value = value;
            }
        });
        this.treeSubject.next({ updated: true, items: this.filFolderTree });
    };
    ShareFileService.prototype.uploadComplete = function (fileUrl, c3Location) {
        this.filFolderTree.map(function (item) {
            if (item.text === fileUrl) {
                item.text = c3Location;
            }
        });
        this.treeSubject.next({ updated: true, items: this.filFolderTree });
    };
    ShareFileService.prototype.cleanFiles = function () {
        this.filFolderTree = [];
        this.treeSubject.next({ updated: true, items: this.filFolderTree });
    };
    ShareFileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShareFileService);
    return ShareFileService;
}());



/***/ }),

/***/ "./src/app/_services/static-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/static-data.service.ts ***!
  \**************************************************/
/*! exports provided: StaticDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDataService", function() { return StaticDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



// import { UserService } from './user.service';


var StaticDataService = /** @class */ (function () {
    function StaticDataService(http) {
        this.http = http;
        this.pmoStaticUrl = '../../assets/json/pmo-static.json';
        this.mapStaticUrl = '../../assets/json/map-static.json';
        this.homeStaticUrl = '../../assets/json/home-static.json';
        this.restrictedNamesUrl = '../../assets/json/restricted-names.json';
        this.lineItemStaticUrl = '../../assets/json/line-item-static.json';
        this.userRoleStaticUrl = '../../assets/json/user-role.json';
        this.envSettingsUrl = '../../assets/json/environment.json';
    }
    StaticDataService.prototype.getPmoStatic = function () {
        return this.http.get(this.pmoStaticUrl);
    };
    StaticDataService.prototype.getMapStatic = function () {
        return this.http.get(this.mapStaticUrl);
    };
    StaticDataService.prototype.getHomeStatic = function (NotAllowedFolders) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('errorMessage', 'false').set('loading', 'false');
        return this.http.get(this.homeStaticUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (list) {
            return list.filter(function (item) {
                if (!NotAllowedFolders.includes(item.type)) {
                    return item;
                }
            });
        }));
    };
    StaticDataService.prototype.getRestrictedNames = function () {
        return this.http.get(this.restrictedNamesUrl);
    };
    StaticDataService.prototype.getLineItemStatic = function () {
        return this.http.get(this.lineItemStaticUrl);
    };
    StaticDataService.prototype.getStaticPermissionData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('errorMessage', 'false').set('loading', 'false');
        return this.http.get(this.userRoleStaticUrl, { headers: headers });
    };
    StaticDataService.prototype.callForEnvironmentData = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('errorMessage', 'false').set('loading', 'false');
        var promise = this.http.get(this.envSettingsUrl, { headers: headers })
            .toPromise()
            .then(function (settings) {
            _this.envName = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](settings);
            return settings;
        });
        return promise;
    };
    StaticDataService.prototype.getEnvironmentSettings = function () {
        // alert('env' + this.envName);
        return this.envName;
    };
    StaticDataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    StaticDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StaticDataService);
    return StaticDataService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.searchUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + '/JobServer/webresources/UserSearch';
    }
    UserService.prototype.checkRole = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('errorMessage', 'false').set('loading', 'false');
        // this.searchUserId = localStorage.getItem('userId');
        this.searchUserId = 'krisnx';
        var payload = {
            applicationType: '200',
            userSearch: {
                searchUserId: this.searchUserId
            }
        };
        return this.http.post(this.searchUrl, payload, { headers: headers });
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app-load/app-load.module.ts":
/*!*********************************************!*\
  !*** ./src/app/app-load/app-load.module.ts ***!
  \*********************************************/
/*! exports provided: init_app, get_settings, AppLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init_app", function() { return init_app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_settings", function() { return get_settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoadModule", function() { return AppLoadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-load.service */ "./src/app/app-load/app-load.service.ts");
/* harmony import */ var _services_static_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/static-data.service */ "./src/app/_services/static-data.service.ts");





function init_app(staticDataService) {
    return function () { return staticDataService.callForEnvironmentData(); };
}
function get_settings(appLoadService) {
    return function () { return appLoadService.getSettings(); };
}
var AppLoadModule = /** @class */ (function () {
    function AppLoadModule() {
    }
    AppLoadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [],
            providers: [
                _app_load_service__WEBPACK_IMPORTED_MODULE_3__["AppLoadService"],
                _services_static_data_service__WEBPACK_IMPORTED_MODULE_4__["StaticDataService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: init_app, deps: [_services_static_data_service__WEBPACK_IMPORTED_MODULE_4__["StaticDataService"]], multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: get_settings, deps: [_app_load_service__WEBPACK_IMPORTED_MODULE_3__["AppLoadService"]], multi: true }
            ]
        })
    ], AppLoadModule);
    return AppLoadModule;
}());



/***/ }),

/***/ "./src/app/app-load/app-load.service.ts":
/*!**********************************************!*\
  !*** ./src/app/app-load/app-load.service.ts ***!
  \**********************************************/
/*! exports provided: AppLoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoadService", function() { return AppLoadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_static_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/static-data.service */ "./src/app/_services/static-data.service.ts");




var AppLoadService = /** @class */ (function () {
    function AppLoadService(httpClient, staticDataService) {
        this.httpClient = httpClient;
        this.staticDataService = staticDataService;
    }
    AppLoadService.prototype.getSettings = function () {
        var promise = this.httpClient.get('./assets/json/misc-settings.json')
            .toPromise()
            .then(function (settings) {
            return settings;
        });
        return promise;
    };
    AppLoadService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_static_data_service__WEBPACK_IMPORTED_MODULE_3__["StaticDataService"] }
    ]; };
    AppLoadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_static_data_service__WEBPACK_IMPORTED_MODULE_3__["StaticDataService"]])
    ], AppLoadService);
    return AppLoadService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_pss_config_pss_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pss-config/pss-config.component */ "./src/app/components/pss-config/pss-config.component.ts");




var routes = [
    {
        path: '',
        component: _components_pss_config_pss_config_component__WEBPACK_IMPORTED_MODULE_3__["PssConfigComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pss-proposal';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_pss_config_pss_config_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pss-config/pss-config.component */ "./src/app/components/pss-config/pss-config.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_helpers/token.interceptor */ "./src/app/_helpers/token.interceptor.ts");
/* harmony import */ var _services_static_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/static-data.service */ "./src/app/_services/static-data.service.ts");
/* harmony import */ var _app_load_app_load_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-load/app-load.module */ "./src/app/app-load/app-load.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_add_from_compas_drive_dialog_add_from_compas_drive_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-from-compas-drive-dialog/add-from-compas-drive-dialog.component */ "./src/app/components/add-from-compas-drive-dialog/add-from-compas-drive-dialog.component.ts");
/* harmony import */ var _components_data_file_list_data_file_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/data-file-list/data-file-list.component */ "./src/app/components/data-file-list/data-file-list.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_share_file_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_services/share-file.service */ "./src/app/_services/share-file.service.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_pss_config_pss_config_component__WEBPACK_IMPORTED_MODULE_6__["PssConfigComponent"],
                _components_add_from_compas_drive_dialog_add_from_compas_drive_dialog_component__WEBPACK_IMPORTED_MODULE_13__["AddFromCompasDriveDialogComponent"],
                _components_data_file_list_data_file_list_component__WEBPACK_IMPORTED_MODULE_14__["DataFileListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_load_app_load_module__WEBPACK_IMPORTED_MODULE_11__["AppLoadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
            ],
            providers: [
                _services_static_data_service__WEBPACK_IMPORTED_MODULE_10__["StaticDataService"],
                _services__WEBPACK_IMPORTED_MODULE_15__["FileManageService"],
                _services__WEBPACK_IMPORTED_MODULE_15__["UserService"],
                _services_share_file_service__WEBPACK_IMPORTED_MODULE_17__["ShareFileService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_16__["HashLocationStrategy"]
                }
            ],
            entryComponents: [
                _components_add_from_compas_drive_dialog_add_from_compas_drive_dialog_component__WEBPACK_IMPORTED_MODULE_13__["AddFromCompasDriveDialogComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-from-compas-drive-dialog/add-from-compas-drive-dialog.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/add-from-compas-drive-dialog/add-from-compas-drive-dialog.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-title {\n  font-size: 1.1em;\n  font-size: 1em;\n  font-weight: bold;\n  color: #005166;\n}\n\n.relative-box {\n  position: relative;\n  padding: 0.1em 0.7em;\n}\n\n.send-color {\n  background-color: #2e80cc;\n  color: #fff;\n}\n\n.dialog-footer {\n  box-shadow: 1px 0 0.5em #ccc;\n  padding: 0.8em 0.8em;\n  width: 100%;\n  height: 4em;\n  background-color: #fff;\n  margin-bottom: -11px;\n  border-radius: 0 0 0.4em 0.3em;\n}\n\n.mat-dialog-title {\n  margin: 0;\n}\n\n.bold-text {\n  font-weight: bold;\n}\n\n.search-box {\n  padding: 0.4em 0.5em;\n  background-color: #eee;\n}\n\n.breadcrumb {\n  background-color: #ffffff;\n  float: left;\n  padding-bottom: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.breadcrumb li {\n  padding: 0.1em;\n}\n\n.breadcrumb-container {\n  height: 46px;\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n}\n\n.custom-search {\n  height: 28px;\n}\n\n.before-icon i {\n  color: #aaa;\n}\n\n.filter-list {\n  position: relative;\n  margin: 0.5em 0.5em;\n}\n\n.filter-list span {\n  color: #bbb;\n}\n\n.filter-list span::after {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n  margin-right: -100%;\n  border-bottom: 1px solid #bbb;\n  top: 10px;\n  position: absolute;\n}\n\n.drive-content {\n  position: relative;\n  min-height: 370px;\n}\n\n.loading-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.loader {\n  width: 40px;\n  height: 40px;\n  margin: 100px auto;\n  background-color: #333;\n  margin: 13em 16em;\n  border-radius: 100%;\n  -webkit-animation: sk-scaleout 1s infinite ease-in-out;\n  animation: sk-scaleout 1s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    opacity: 0;\n  }\n}\n\n@keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtZnJvbS1jb21wYXMtZHJpdmUtZGlhbG9nL0Q6XFxBbmd1bGFyXFxwc3MtcHJvcG9zYWwvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFkZC1mcm9tLWNvbXBhcy1kcml2ZS1kaWFsb2dcXGFkZC1mcm9tLWNvbXBhcy1kcml2ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWZyb20tY29tcGFzLWRyaXZlLWRpYWxvZy9hZGQtZnJvbS1jb21wYXMtZHJpdmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVFO0VBQ0UsU0FBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7QUNDSjs7QURFRTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURBSTtFQUNFLGNBQUE7QUNFTjs7QURFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURHSTtFQUNFLFdBQUE7QUNBTjs7QURJRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURFSTtFQUNFLFdBQUE7QUNBTjs7QURFSTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDQU47O0FETUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtBQ0hKOztBRE1FO0VBV0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLHNEQUFBO0VBQ0EsOENBQUE7QUNmSjs7QURrQkU7RUFDRTtJQUNFLDJCQUFBO0VDZko7RURpQkU7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUNmSjtBQUNGOztBRGtCRTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxtQkFBQTtFQ2hCSjtFRGtCRTtJQUNFLDJCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VDaEJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1mcm9tLWNvbXBhcy1kcml2ZS1kaWFsb2cvYWRkLWZyb20tY29tcGFzLWRyaXZlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwNTE2NjtcclxuICB9XHJcbiAgXHJcbiAgLnJlbGF0aXZlLWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwLjFlbSAwLjdlbTtcclxuICB9XHJcbiAgXHJcbiAgLnNlbmQtY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlODBjYztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuZGlhbG9nLWZvb3RlciB7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMCAwLjVlbSAjY2NjO1xyXG4gICAgcGFkZGluZzogMC44ZW0gMC44ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNGVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAuNGVtIDAuM2VtO1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy10aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib2xkLXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtYm94IHtcclxuICAgIHBhZGRpbmc6IDAuNGVtIDAuNWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICB9XHJcbiAgXHJcbiAgLmJyZWFkY3J1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIGxpIHtcclxuICAgICAgcGFkZGluZzogMC4xZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5icmVhZGNydW1iLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLXNlYXJjaCB7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZWZvcmUtaWNvbiB7XHJcbiAgICBpIHtcclxuICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5maWx0ZXItbGlzdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAuNWVtIDAuNWVtO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgfVxyXG4gICAgc3Bhbjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xMDAlO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYjtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGxvYWRpbmcgc2NyZWVuIGZvciBvcGVuaW5nIGZpbGUgZm9sZGVyIGFwaSdzXHJcbiAgXHJcbiAgLmRyaXZlLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMzcwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkZXIge1xyXG4gICAgLy8gYm9yZGVyOiAxMHB4IHNvbGlkICNmM2YzZjM7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBib3JkZXItdG9wOiAxMHB4IHNvbGlkIGJsdWU7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIGJsdWU7XHJcbiAgICAvLyB3aWR0aDogNjBweDtcclxuICAgIC8vIGhlaWdodDogNjBweDtcclxuICAgIC8vIG1hcmdpbjogMTRlbSAxN2VtO1xyXG4gICAgLy8gLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLy8gYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBcclxuICAgIG1hcmdpbjogMTNlbSAxNmVtO1xyXG4gIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1zY2FsZW91dCAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbjogc2stc2NhbGVvdXQgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzay1zY2FsZW91dCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2stc2NhbGVvdXQge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCIuZGlhbG9nLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwNTE2Njtcbn1cblxuLnJlbGF0aXZlLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMC4xZW0gMC43ZW07XG59XG5cbi5zZW5kLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlODBjYztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kaWFsb2ctZm9vdGVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDAgMC41ZW0gI2NjYztcbiAgcGFkZGluZzogMC44ZW0gMC44ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogLTExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwLjRlbSAwLjNlbTtcbn1cblxuLm1hdC1kaWFsb2ctdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlYXJjaC1ib3gge1xuICBwYWRkaW5nOiAwLjRlbSAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLmJyZWFkY3J1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLmJyZWFkY3J1bWIgbGkge1xuICBwYWRkaW5nOiAwLjFlbTtcbn1cblxuLmJyZWFkY3J1bWItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0NnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5jdXN0b20tc2VhcmNoIHtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuXG4uYmVmb3JlLWljb24gaSB7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4uZmlsdGVyLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMC41ZW0gMC41ZW07XG59XG4uZmlsdGVyLWxpc3Qgc3BhbiB7XG4gIGNvbG9yOiAjYmJiO1xufVxuLmZpbHRlci1saXN0IHNwYW46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYmI7XG4gIHRvcDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZHJpdmUtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMzcwcHg7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5sb2FkZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIG1hcmdpbjogMTNlbSAxNmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stc2NhbGVvdXQgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2stc2NhbGVvdXQgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1zY2FsZW91dCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stc2NhbGVvdXQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/add-from-compas-drive-dialog/add-from-compas-drive-dialog.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/add-from-compas-drive-dialog/add-from-compas-drive-dialog.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddFromCompasDriveDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFromCompasDriveDialogComponent", function() { return AddFromCompasDriveDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_constants */ "./src/app/_constants/index.ts");
/* harmony import */ var _services_static_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/static-data.service */ "./src/app/_services/static-data.service.ts");






var AddFromCompasDriveDialogComponent = /** @class */ (function () {
    function AddFromCompasDriveDialogComponent(driveService, dialog, userService, snackBar, staticData, fileManage, dialogRef) {
        this.driveService = driveService;
        this.dialog = dialog;
        this.userService = userService;
        this.snackBar = snackBar;
        this.staticData = staticData;
        this.fileManage = fileManage;
        this.dialogRef = dialogRef;
        // this.rootFolderId = genStatic.rootFolderId;
        // alert('rootFloderId' + this.rootFolderId);
        // this.staticData.callForEnvironmentData();
        this.tableData = [];
        this.breadCrumb = [];
        this.NotAllowedFolders = [];
        this.folderFiltered = [];
        this.fileFiltered = [];
        this.filterData = '';
        this.loading = false;
    }
    AddFromCompasDriveDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.staticData.callForEnvironmentData().then(function (data) {
            _this.staticData.getEnvironmentSettings().subscribe(function (envData) {
                if (envData.environment === 'production') {
                    _this.rootFolderId = envData.production.rootFolderId;
                }
                else {
                    _this.rootFolderId = envData.quality.rootFolderId;
                }
                // alert('rootFolderId' + this.rootFolderId);
            });
        });
        this.currentFolder = {
            name: this.qtNumber,
            createDate: '',
            modifiedDate: '',
            parentFolderId: this.rootFolderId,
            folderId: '0',
            sName: '',
            type: ''
        };
        this.breadCrumb = [];
        this.qtNumber = this.driveService.getSharedData();
        this.documentList();
    };
    AddFromCompasDriveDialogComponent.prototype.initialService = function () {
        var _this = this;
        // User search service for getting role and id
        this.loading = true;
        this.userService.checkRole().subscribe(function (user) {
            if (user.userDetails[0]) {
                _this.staticData.getStaticPermissionData().subscribe(function (permission) {
                    var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"]([0, 0, 0, 0, 0], 5), pmo = _a[0], qrcode = _a[1], revit = _a[2], map = _a[3], global = _a[4];
                    user.userDetails[0].roleIdList.forEach(function (role) {
                        if (permission.allowedUerRole.pmo.includes(role.roleId)) {
                            pmo = 1;
                        }
                        else if (permission.allowedUerRole.qrcode.includes(role.roleId)) {
                            qrcode = 1;
                        }
                        else if (permission.allowedUerRole.revit.includes(role.roleId)) {
                            revit = 1;
                        }
                        else if (permission.allowedUerRole.map.includes(role.roleId)) {
                            map = 1;
                        }
                        else if (permission.allowedUerRole.global.includes(role.roleId)) {
                            global = 1;
                        }
                    });
                    if (permission.allowedUserId.pmo.includes(user.userDetails[0].userId)) {
                        pmo = 1;
                    }
                    if (permission.allowedUserId.qrcode.includes(user.userDetails[0].userId)) {
                        qrcode = 1;
                    }
                    if (permission.allowedUserId.revit.includes(user.userDetails[0].userId)) {
                        revit = 1;
                    }
                    if (permission.allowedUserId.map.includes(user.userDetails[0].userId)) {
                        map = 1;
                    }
                    if (permission.allowedUserId.global.includes(user.userDetails[0].userId)) {
                        global = 1;
                    }
                    _this.NotAllowedFolders = [];
                    if (pmo === 0) {
                        _this.NotAllowedFolders.push('pmo');
                        _this.NotAllowedFolders.push('PMO');
                    }
                    if (qrcode === 0) {
                        _this.NotAllowedFolders.push('qrcode');
                    }
                    if (revit === 0) {
                        _this.NotAllowedFolders.push('revit');
                    }
                    if (global === 0) {
                        _this.NotAllowedFolders.push('global');
                    }
                    if (map === 0) {
                        _this.NotAllowedFolders.push('map');
                        _this.NotAllowedFolders.push('MAP');
                        _this.NotAllowedFolders.push('Map');
                    }
                    _this.getInitialList();
                });
            }
            else {
                _this.snackBar.open('User not found', 'Close', {
                    duration: 2000,
                });
                _this.loading = false;
                // this.dialogRef.close();
            }
        }, function (error) {
            _this.loading = false;
            _this.snackBar.open('Not able to connect to Compas Drive. Please try again later or contact Compas Customer support', 'Close', {
                duration: 2000,
            });
        });
    };
    AddFromCompasDriveDialogComponent.prototype.updateTable = function () {
        this.tableData = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.PMOStaticList.folders, this.PMOStaticList.files);
    };
    AddFromCompasDriveDialogComponent.prototype.getInitialList = function () {
        var _this = this;
        this.driveService.getHomeList(this.qtNumber, this.NotAllowedFolders).subscribe(function (data) {
            if (data.filesCount <= 0 && data.foldersCount <= 0) {
                _this.snackBar.open('No documents available in COMPAS drive', 'Close', {
                    duration: 2000,
                });
                _this.loading = false;
                // this.dialogRef.close();
            }
            else {
                _this.PMOStaticList = data;
                var QtFolder = void 0;
                if (_this.qtNumber != null) {
                    QtFolder = {
                        folderId: data.folderId.toString(),
                        name: _this.qtNumber,
                        parentFolderId: _this.rootFolderId,
                        createDate: '',
                        modifiedDate: '',
                        sName: '',
                        type: ''
                    };
                    if (_this.breadCrumb.length === 0) {
                        var bCrumb = QtFolder;
                        _this.breadCrumb.push(bCrumb);
                        _this.currentFolder = QtFolder;
                    }
                }
                _this.staticData.getHomeStatic(_this.NotAllowedFolders).subscribe(function (item) {
                    if (data.foldersCount > 0) {
                        var nameArray_1 = data.folders.reduce(function (acc, curr) {
                            acc.push(curr.name);
                            return acc;
                        }, []);
                        item.forEach(function (el) {
                            if (!nameArray_1.includes(el.name)) {
                                _this.PMOStaticList.folders.push(el);
                            }
                            else if (el.type === _constants__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].global) {
                                _this.PMOStaticList.folders.push(el);
                            }
                            else if (el.type === _constants__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].qrcode) {
                                _this.PMOStaticList.folders.push(el);
                            }
                            else if (el.type === _constants__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].revit) {
                                _this.PMOStaticList.folders.push(el);
                            }
                        });
                    }
                    else {
                        _this.PMOStaticList.foldersCount = 3;
                        _this.PMOStaticList.folders = item;
                    }
                    _this.updateTable();
                });
                var path = _this.getCurrentPath();
                if (_this.PMOStaticList.files.length > 0) {
                    _this.PMOStaticList.files.map(function (file) {
                        file.typeName = _this.fileManage.getFileType(file.url.toString());
                        file.iconClass = _this.fileManage.getFileIcon(file.url.toString());
                        file.type = _constants__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].file;
                    });
                }
                // file.url = this.filterUrlService.createEditUrl(file.url, path);
                var folders = _this.PMOStaticList.folders;
                var breadCrumb = _this.breadCrumb;
                _this.updateTable();
                _this.loading = false;
            }
        }, 
        //  error => {
        //   this.loading = false;
        //   this.snackBar.open('Not able to connect to Compas Drive. Please try again later or contact Compas Customer support', 'Close', {
        //     duration: 2000,
        //   });
        // }
        function (error) {
            if (error.error.message.includes('Could not find any folder with name')) {
                _this.createFolderWithQuoteNumber();
            }
            else {
                _this.loading = false;
                _this.snackBar.open('Not able to connect to Compas Drive. Please try again later or contact Compas Customer support', 'Close', {
                    duration: 2000,
                });
            }
        });
    };
    AddFromCompasDriveDialogComponent.prototype.createFolderWithQuoteNumber = function () {
        var _this = this;
        this.driveService
            .createFolder(this.qtNumber, this.rootFolderId).subscribe(function () {
            _this.getInitialList();
        });
    };
    AddFromCompasDriveDialogComponent.prototype.getCurrentPath = function () {
        // cunstruct current folder path from breadcrumb
        var path = '';
        if (this.breadCrumb.length >= 2 && this.breadCrumb[1].type === _constants__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].global) {
            this.breadCrumb.forEach(function (link, index) {
                if (index === 1) {
                    path = link.name;
                }
                else if (index > 1) {
                    path = path + '/' + link.name;
                }
            });
        }
        else {
            this.breadCrumb.forEach(function (link, index) {
                index === 0 ? path = link.name : path = path + '/' + link.name;
            });
        }
        return path;
    };
    AddFromCompasDriveDialogComponent.prototype.onSelectionChange = function (folder) {
        var _this = this;
        this.loading = true;
        this.PMOStaticList.folders = [];
        this.PMOStaticList.files = [];
        this.currentFolder = folder;
        this.currentFolder.currentId = folder.name + folder.folderId;
        this.breadCrumb.push(folder);
        this.currentFolder.position = this.breadCrumb.length - 1;
        if (this.currentFolder.type === _constants__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].global) {
            this.driveService.getHomeList('Global', this.NotAllowedFolders).subscribe(function (data) {
                _this.PMOStaticList = data;
                var path = _this.getCurrentPath();
                if (_this.PMOStaticList.files.length > 0) {
                    _this.PMOStaticList.files.map(function (file) {
                        file.type = _constants__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].file;
                        file.sendUrl = file.url.toString();
                        file.typeName = _this.fileManage.getFileType(file.url.toString());
                        file.iconClass = _this.fileManage.getFileIcon(file.url.toString());
                    });
                }
                // file.url = this.filterUrlService.createEditUrl(file.url, path);
                _this.updateTable();
                _this.loading = false;
            });
        }
        else if (this.currentFolder.type === _constants__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].pmo) {
            this.loadSecondaryList(this.currentFolder.folderId, _constants__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].pmo);
        }
        else if (folder.name === this.qtNumber) {
            var breadCrumb = this.breadCrumb;
            this.initialService();
            // this.getInitialList();
        }
        else {
            var breadCrumb = this.breadCrumb;
            this.loadSecondaryList(folder.folderId, null);
        }
        this.updateTable();
    };
    AddFromCompasDriveDialogComponent.prototype.loadSecondaryList = function (parentId, parentFolderType) {
        var _this = this;
        if (parentFolderType === _constants__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].pmo) {
            this.staticData.getPmoStatic().subscribe(function (item) {
                _this.PMOStaticList.folders = item;
                var folders = _this.PMOStaticList.folders;
                var breadCrumb = _this.breadCrumb;
                _this.updateTable();
                _this.loading = false;
            });
        }
        else if (parentId !== '-1') {
            this.driveService.getChilds(parentId).subscribe(function (data) {
                _this.PMOStaticList = data;
                if (_this.PMOStaticList.filesCount > 0) {
                    var path = _this.getCurrentPath();
                    // fileData.fileEntryId = this.fileManage.getFileType(fileData.url.toString()),
                    _this.PMOStaticList.files.map(function (fileData) {
                        fileData.sendUrl = fileData.url.toString();
                        fileData.typeName = _this.fileManage.getFileType(fileData.url.toString()),
                            fileData.iconClass = _this.fileManage.getFileIcon(fileData.url.toString());
                        fileData.type = _constants__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].file;
                    });
                }
                else {
                    _this.PMOStaticList.files = [];
                }
                // fileData.url = this.filterUrlService.createEditUrl(fileData.url, path);
                if (_this.currentFolder.name.toUpperCase() === 'PMO') {
                    _this.staticData.getPmoStatic().subscribe(function (item) {
                        var nameArray = data.folders.reduce(function (acc, curr) {
                            acc.push(curr.name);
                            return acc;
                        }, []);
                        item.forEach(function (pmo) {
                            if (!nameArray.includes(pmo.name)) {
                                _this.PMOStaticList.folders.push(pmo);
                            }
                        });
                        var folders = _this.PMOStaticList.folders;
                        var breadCrumb = _this.breadCrumb;
                        _this.updateTable();
                    });
                }
                if (_this.PMOStaticList.folders.length > 0) {
                    var folders = _this.PMOStaticList.folders;
                    var breadCrumb = _this.breadCrumb;
                }
                _this.updateTable();
                _this.loading = false;
            });
        }
        else {
            this.loading = false;
        }
    };
    AddFromCompasDriveDialogComponent.prototype.gotoBreadCrumb = function (index) {
        this.breadCrumb.length = index + 1;
    };
    AddFromCompasDriveDialogComponent.prototype.addSelected = function () {
        this.dialogRef.close(this.tableData);
    };
    AddFromCompasDriveDialogComponent.prototype.filterSearch = function (key) {
        if (key === '') {
            this.folderFiltered = [];
            this.fileFiltered = [];
            return false;
        }
        this.folderFiltered = this.tableData.filter(function (data) {
            return (data.type !== 'file' && data.name.toUpperCase().includes(key.toUpperCase()));
        });
        this.fileFiltered = this.tableData.filter(function (data) {
            return (data.type === 'file' && data.title.toUpperCase().includes(key.toUpperCase()));
        });
    };
    AddFromCompasDriveDialogComponent.prototype.onChecked = function ($event) {
        console.log($event);
    };
    AddFromCompasDriveDialogComponent.prototype.myDrive = function () {
        // this.breadCrumb = [];
        // this.data = JSON.parse(this.messageData.getsharedData());
        // const user = this.data.userInfo.userID;
        // // const user = localStorage.getItem('userId');
        // this.driveService.getHomeList(`Global/${user}`, this.NotAllowedFolders).subscribe(data => {
        //   this.PMOStaticList = data;
        //   const path = this.getCurrentPath();
        //   if (this.PMOStaticList.files.length > 0) {
        //     this.PMOStaticList.files.map(file => {
        //       file.type = itemType.file;
        //       file.sendUrl = file.url.toString();
        //       file.typeName = this.fileManage.getFileType(file.url.toString());
        //       file.iconClass = this.fileManage.getFileIcon(file.url.toString());
        //     });
        //   }
        //   // file.url = this.filterUrlService.createEditUrl(file.url, path);
        //   this.updateTable();
        //   this.loading = false;
        // }, error => {
        //   this.loading = false;
        //   this.snackBar.open('Not able to connect to Compas Drive. Please try again later or contact Compas Customer support', 'Close', {
        //     duration: 2000,
        //   });
        // });
    };
    AddFromCompasDriveDialogComponent.prototype.documentList = function () {
        var _this = this;
        this.breadCrumb = [];
        this.driveService.getPssDocument().subscribe(function (data) {
            _this.PMOStaticList = data;
            if (_this.PMOStaticList.files.length > 0) {
                _this.PMOStaticList.files.map(function (file) {
                    file.type = _constants__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].file;
                    file.sendUrl = file.url.toString();
                    file.typeName = _this.fileManage.getFileType(file.url.toString());
                    file.iconClass = _this.fileManage.getFileIcon(file.url.toString());
                });
            }
            // file.url = this.filterUrlService.createEditUrl(file.url, path);
            _this.updateTable();
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            _this.snackBar.open('Not able to connect to Compas Drive. Please try again later or contact Compas Customer support', 'Close', {
                duration: 2000,
            });
        });
    };
    AddFromCompasDriveDialogComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["C3Service"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _services_static_data_service__WEBPACK_IMPORTED_MODULE_5__["StaticDataService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["FileManageService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    AddFromCompasDriveDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-from-compas-drive-dialog',
            template: __webpack_require__(/*! raw-loader!./add-from-compas-drive-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-from-compas-drive-dialog/add-from-compas-drive-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-from-compas-drive-dialog.component.scss */ "./src/app/components/add-from-compas-drive-dialog/add-from-compas-drive-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["C3Service"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _services_static_data_service__WEBPACK_IMPORTED_MODULE_5__["StaticDataService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["FileManageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AddFromCompasDriveDialogComponent);
    return AddFromCompasDriveDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/data-file-list/data-file-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/data-file-list/data-file-list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.width-10 {\n  width: 15px;\n}\n.star {\n  visibility: hidden;\n  font-size: 18px;\n  cursor: pointer;\n  color: #bbb;\n}\n.star:before {\n  content: \"★\";\n  visibility: visible;\n  position: absolute;\n  color: #bbb;\n}\n.star:checked:before {\n  content: \"★\";\n  visibility: visible;\n  position: absolute;\n  color: #0087a7;\n}\n.table th {\n  background-color: #f3f3f3;\n  padding-top: 0.5rem;\n  padding-bottom: 0.4rem;\n  color: #777;\n  padding: 0.4rem;\n  position: relative;\n}\n.table td {\n  padding: 0.2rem 0.4rem;\n}\n.grey-text {\n  color: #777;\n}\n.checkbox {\n  width: 17px;\n  height: 17px;\n  margin-top: 3px;\n}\n.mat-button {\n  min-width: 1px;\n  border: 0.1em solid #eee;\n  border-radius: 2em;\n  line-height: 25px;\n  padding: 0 9px;\n}\n.light-text-8 {\n  color: #999;\n}\n.version-history-icon {\n  cursor: pointer;\n  color: #0087ff;\n}\n.custom-open {\n  color: #959595;\n  padding: 0.2em 0.6em;\n  background-color: #fff;\n  border: 1.2px solid;\n  border-radius: 2em;\n  margin: 0;\n}\n.empty-text {\n  color: #eee;\n  text-align: center;\n  padding: 4em 0em !important;\n  font-size: 2em;\n  font-family: arial;\n  font-weight: bold;\n}\n.sort-icon {\n  cursor: pointer;\n  padding: 0.8em 0.4em;\n  font-size: 0.9em;\n}\n.folder-name {\n  color: #006db1;\n}\n.download-btn:hover {\n  color: #000;\n}\n.drive-content {\n  width: 100%;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.width-20 {\n  width: 20px;\n}\n.folder-icon {\n  color: #aaa;\n}\n.file-column i {\n  color: #e84127;\n}\n.file-column a {\n  color: #000;\n}\n/* Customize the label (the container) */\n.container-c {\n  display: block;\n  position: relative;\n  padding-left: 14px;\n  margin-bottom: 2px;\n  margin-left: 2px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Hide the browser's default checkbox */\n.container-c input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n/* Create a custom checkbox */\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 18px;\n  width: 18px;\n  border: 1.3px solid #bbb;\n}\n/* On mouse-over, add a grey background color */\n.container-c:hover input ~ .checkmark {\n  border: 1.3px solid #bbb;\n}\n/* When the checkbox is checked, add a blue background */\n.container-c input:checked ~ .checkmark {\n  background-color: #2196F3;\n  border: none;\n}\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n/* Show the checkmark when checked */\n.container-c input:checked ~ .checkmark:after {\n  display: block;\n}\n/* Style the checkmark/indicator */\n.container-c .checkmark:after {\n  left: 8px;\n  top: 4px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXRhLWZpbGUtbGlzdC9kYXRhLWZpbGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXRhLWZpbGUtbGlzdC9EOlxcQW5ndWxhclxccHNzLXByb3Bvc2FsL3NyY1xcYXBwXFxjb21wb25lbnRzXFxkYXRhLWZpbGUtbGlzdFxcZGF0YS1maWxlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksV0FBQTtBREVKO0FDQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBREVKO0FDQUE7RUFDRyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURHSDtBQ0RBO0VBQ0csWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FESUg7QUNEQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURJSjtBQ0RBO0VBQ0Usc0JBQUE7QURJRjtBQ0RBO0VBQ0ksV0FBQTtBRElKO0FDREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURJSjtBQ0RBO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURJSjtBQ0RBO0VBQ0ksV0FBQTtBRElKO0FDREE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBRElGO0FDR0E7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FEQUY7QUNHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURBRjtBQ0dBO0VBQ0UsZUFBQTtFQUdBLG9CQUFBO0VBQ0EsZ0JBQUE7QURGRjtBQ2dCQTtFQUNFLGNBQUE7QURiRjtBQ2dCQTtFQUNFLFdBQUE7QURiRjtBQ29CQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEakJGO0FDb0JBO0VBQ0UsV0FBQTtBRGpCRjtBQ29CQTtFQUNFLFdBQUE7QURqQkY7QUNxQkU7RUFDRSxjQUFBO0FEbEJKO0FDcUJFO0VBQ0UsV0FBQTtBRG5CSjtBQzBCQSx3Q0FBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBRHZCRjtBQzBCQSx3Q0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FEdkJGO0FDMEJBLDZCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSx3QkFBQTtBRHhCRjtBQzJCQSwrQ0FBQTtBQUNBO0VBRUUsd0JBQUE7QUR6QkY7QUM0QkEsd0RBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBRHpCRjtBQzRCQSw2REFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRHpCRjtBQzRCQSxvQ0FBQTtBQUNBO0VBQ0UsY0FBQTtBRHpCRjtBQzRCQSxrQ0FBQTtBQUNBO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUVBLHdCQUFBO0FEekJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXRhLWZpbGUtbGlzdC9kYXRhLWZpbGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi53aWR0aC0xMCB7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG4uc3RhciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjYmJiO1xufVxuXG4uc3RhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKYhVwiO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjYmJiO1xufVxuXG4uc3RhcjpjaGVja2VkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4piFXCI7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICMwMDg3YTc7XG59XG5cbi50YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XG4gIGNvbG9yOiAjNzc3O1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcbn1cblxuLmdyZXktdGV4dCB7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4uY2hlY2tib3gge1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5tYXQtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAxcHg7XG4gIGJvcmRlcjogMC4xZW0gc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgcGFkZGluZzogMCA5cHg7XG59XG5cbi5saWdodC10ZXh0LTgge1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnZlcnNpb24taGlzdG9yeS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzAwODdmZjtcbn1cblxuLmN1c3RvbS1vcGVuIHtcbiAgY29sb3I6ICM5NTk1OTU7XG4gIHBhZGRpbmc6IDAuMmVtIDAuNmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDEuMnB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLmVtcHR5LXRleHQge1xuICBjb2xvcjogI2VlZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0ZW0gMGVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc29ydC1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjhlbSAwLjRlbTtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLmZvbGRlci1uYW1lIHtcbiAgY29sb3I6ICMwMDZkYjE7XG59XG5cbi5kb3dubG9hZC1idG46aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmRyaXZlLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi53aWR0aC0yMCB7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4uZm9sZGVyLWljb24ge1xuICBjb2xvcjogI2FhYTtcbn1cblxuLmZpbGUtY29sdW1uIGkge1xuICBjb2xvcjogI2U4NDEyNztcbn1cbi5maWxlLWNvbHVtbiBhIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8qIEN1c3RvbWl6ZSB0aGUgbGFiZWwgKHRoZSBjb250YWluZXIpICovXG4uY29udGFpbmVyLWMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXG4uY29udGFpbmVyLWMgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cblxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXG4uY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvcmRlcjogMS4zcHggc29saWQgI2JiYjtcbn1cblxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG4uY29udGFpbmVyLWM6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgYm9yZGVyOiAxLjNweCBzb2xpZCAjYmJiO1xufVxuXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cbi5jb250YWluZXItYyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbi5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cbi5jb250YWluZXItYyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xuLmNvbnRhaW5lci1jIC5jaGVja21hcms6YWZ0ZXIge1xuICBsZWZ0OiA4cHg7XG4gIHRvcDogNHB4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59IiwiLndpZHRoLTEwIHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG59XHJcblxyXG4uc3RhciB7XHJcbiAgICB2aXNpYmlsaXR5OmhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2JiYjtcclxufVxyXG4uc3RhcjpiZWZvcmUge1xyXG4gICBjb250ZW50OiBcIlxcMjYwNVwiO1xyXG4gICB2aXNpYmlsaXR5OnZpc2libGU7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgY29sb3I6ICNiYmI7XHJcbn1cclxuLnN0YXI6Y2hlY2tlZDpiZWZvcmUge1xyXG4gICBjb250ZW50OiBcIlxcMjYwNVwiO1xyXG4gICB2aXNpYmlsaXR5OnZpc2libGU7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgY29sb3I6ICMwMDg3YTc7XHJcbn1cclxuXHJcbi50YWJsZSB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xyXG59XHJcblxyXG4uZ3JleS10ZXh0IHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gICAgd2lkdGg6IDE3cHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uIHtcclxuICAgIG1pbi13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyOiAwLjFlbSBzb2xpZCAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDlweDtcclxufVxyXG5cclxuLmxpZ2h0LXRleHQtOCB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuLnZlcnNpb24taGlzdG9yeS1pY29uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMwMDg3ZmY7XHJcbn1cclxuXHJcbi8vIC5taW4td2lkdGgge1xyXG4vLyAgIC8vIHdpZHRoOiA1MHB4O1xyXG4vLyB9XHJcblxyXG4uY3VzdG9tLW9wZW4ge1xyXG4gIGNvbG9yOiAjOTU5NTk1O1xyXG4gIHBhZGRpbmc6IDAuMmVtIDAuNmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxLjJweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZW1wdHktdGV4dCB7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDRlbSAwZW0haW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNvcnQtaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XHJcbiAgLy8gY29sb3I6ICMwMDA7XHJcbiAgcGFkZGluZzogMC44ZW0gMC40ZW07XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gcmlnaHQ6IDA7XHJcbiAgLy8gdG9wOiAwO1xyXG4gIC8vIGJvcmRlci1yaWdodDogMC4xZW0gc29saWQgI2ZmZjtcclxuICAvLyA6YmVmb3JlIHtcclxuICAvLyAgIGNvbnRlbnQ6IFwiXFwyMTkzIFxcMjE5MVwiO1xyXG4gIC8vIH1cclxufVxyXG5cclxuLy8gdGQgaSB7XHJcbi8vICAgLy8gY29sb3I6ICMwMDZkYjE7XHJcbi8vIH1cclxuXHJcbi5mb2xkZXItbmFtZSB7XHJcbiAgY29sb3I6ICMwMDZkYjE7XHJcbn1cclxuXHJcbi5kb3dubG9hZC1idG46aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4vLyAudGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDJuKzEpID4gdGQge1xyXG4vLyAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmNGZmZmU7XHJcbi8vIH1cclxuXHJcbi5kcml2ZS1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ud2lkdGgtMjAge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4uZm9sZGVyLWljb24ge1xyXG4gIGNvbG9yOiAjYWFhO1xyXG59XHJcblxyXG4uZmlsZS1jb2x1bW4ge1xyXG4gIGkge1xyXG4gICAgY29sb3I6ICNlODQxMjc7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZm9yIGNoZWNrIGJveFxyXG5cclxuXHJcbi8qIEN1c3RvbWl6ZSB0aGUgbGFiZWwgKHRoZSBjb250YWluZXIpICovXHJcbi5jb250YWluZXItYyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXHJcbi5jb250YWluZXItYyBpbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXHJcbi5jaGVja21hcmsge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IDEuM3B4IHNvbGlkICNiYmI7XHJcbn1cclxuXHJcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4uY29udGFpbmVyLWM6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGJvcmRlcjogMS4zcHggc29saWQgI2JiYjtcclxufVxyXG5cclxuLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXHJcbi5jb250YWluZXItYyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXHJcbi5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cclxuLmNvbnRhaW5lci1jIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cclxuLmNvbnRhaW5lci1jIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGxlZnQ6IDhweDtcclxuICB0b3A6IDRweDtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/data-file-list/data-file-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/data-file-list/data-file-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: DataFileListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFileListComponent", function() { return DataFileListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_constants */ "./src/app/_constants/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var DataFileListComponent = /** @class */ (function () {
    // public checkAll: boolean;
    function DataFileListComponent(dialog, driveService, router, fileManager, snackBar) {
        this.dialog = dialog;
        this.driveService = driveService;
        this.router = router;
        this.fileManager = fileManager;
        this.snackBar = snackBar;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dialogWidth = 430;
        this.isCheckBox = false;
        // this.tableData = [];
    }
    DataFileListComponent.prototype.ngOnInit = function () {
        // console.log('fileFolderTree', this.fileFolderTree);
    };
    DataFileListComponent.prototype.ngOnChanges = function () {
        this.checkAll = false;
    };
    DataFileListComponent.prototype.ngOnDestroy = function () {
        this.onDestroy$.next(true);
        this.onDestroy$.unsubscribe();
    };
    DataFileListComponent.prototype.onSelected = function (item) {
        this.selected.emit(item);
    };
    DataFileListComponent.prototype.getIconFile = function (url) {
        var icon = this.fileManager.getFileIconPath(url);
        return icon;
    };
    // isCheckableAll() {
    //   let status = false;
    //   const checkable = this.fileFolderTree.filter( item => {
    //     if ( this.isCheckable(item) ) {
    //       return item;
    //     }
    //   });
    //   if (this.currentPath.length > 1 && this.fileFolderTree.length > 0 && checkable.length > 1) {
    //     status = true;
    //   }
    //   return status;
    // }
    // itemChecked(check: boolean) {
    //   // check current checkbox
    //   if (check === false) {
    //     this.checkAll = false;
    //   } else {
    //     let allSelected = true;
    //     this.fileFolderTree.forEach( item => {
    //       if (item.checked !== true &&
    //         item.folderId !== '-1' &&
    //         item.type !== itemTypes.global &&
    //         this.isCheckable(item)) { allSelected = false; }
    //     });
    //     if ( allSelected === true ) { this.checkAll = true; }
    //   }
    //   this.checked.emit(true);
    // }
    // changeCheckAll(status: boolean) {
    //   // change all checkboxes checked/unchecked
    //   this.fileFolderTree.map( item => {
    //     if (item.folderId !== '-1' &&
    //     item.type !== itemTypes.global &&
    //     this.isCheckable(item)) {
    //       item.checked = status;
    //     }
    //   });
    //   this.checked.emit(true);
    // }
    // isCheckable(item: FileFolderTable) {
    //   let status = true;
    //   if ( item.type === itemTypes.file) {
    //     return status;
    //   }
    //   if (item.folderId === '-1' || item.type === itemTypes.global) {
    //     status = false;
    //   }
    //   if (item.name.toUpperCase() === 'PMO'
    //   && this.currentPath.length === 1) {
    //     status = false;
    //   }
    //   if (item.name.toUpperCase() === 'MAP'
    //   && this.currentPath.length === 1) {
    //     status = false;
    //   }
    //   if (item.name.toUpperCase() === 'PUBLIC'
    //   && this.currentPath.length === 1) {
    //     status = false;
    //   }
    //   if (item.name.toUpperCase() === 'PLAN DRAWINGS'
    //   && this.currentPath.length === 1) {
    //     status = false;
    //   }
    //   if (this.currentPath.length === 2 &&
    //     this.currentPath[1].name.toUpperCase() === 'PMO' &&
    //     this.pmoStaticList.includes(item.name)) {
    //     status = false;
    //   }
    //   return status;
    // }
    DataFileListComponent.prototype.sort = function (name, asc) {
        /* sort the entire list
        argument:
        name: index of clumn as number
        asc: order(asc/desc) as boolean
        return : sorted array
        */
        this.fileFolderTree.sort(function (a, b) {
            var nameA;
            var nameB;
            var returnValue = 0;
            switch (name) {
                case 0: {
                    nameA = a.name ? a.name.toUpperCase() : a.title.toUpperCase();
                    nameB = b.name ? b.name.toUpperCase() : b.title.toUpperCase();
                    break;
                }
                case 1: {
                    nameA = a.modifiedDate;
                    nameB = b.modifiedDate;
                    break;
                }
                case 2: {
                    nameA = a.typeName !== undefined ? a.typeName.toUpperCase() : _constants__WEBPACK_IMPORTED_MODULE_5__["ItemTypes"].folder.toUpperCase();
                    nameB = b.typeName !== undefined ? b.typeName.toUpperCase() : _constants__WEBPACK_IMPORTED_MODULE_5__["ItemTypes"].folder.toUpperCase();
                    break;
                }
            }
            if (asc) {
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }
            else {
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
            }
            return returnValue;
        });
    };
    DataFileListComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["C3Service"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["FileManageService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DataFileListComponent.prototype, "fileFolderTree", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DataFileListComponent.prototype, "currentPath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DataFileListComponent.prototype, "headData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DataFileListComponent.prototype, "checkAll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataFileListComponent.prototype, "selected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataFileListComponent.prototype, "checked", void 0);
    DataFileListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-file-list',
            template: __webpack_require__(/*! raw-loader!./data-file-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/data-file-list/data-file-list.component.html"),
            styles: [__webpack_require__(/*! ./data-file-list.component.scss */ "./src/app/components/data-file-list/data-file-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services__WEBPACK_IMPORTED_MODULE_3__["C3Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["FileManageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], DataFileListComponent);
    return DataFileListComponent;
}());



/***/ }),

/***/ "./src/app/components/pss-config/pss-config.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/pss-config/pss-config.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details {\n  text-align: center;\n}\n\n.breaker-details tr {\n  width: 100vw;\n}\n\n.breaker-details tr th {\n  padding: 1rem;\n  border-color: #e7e7e7;\n  border-style: solid;\n  text-align: center;\n  font-size: 12px;\n}\n\n.breaker-details tr td {\n  padding: 1rem;\n  border-color: #e7e7e7;\n  border-style: solid;\n  font-size: 12px;\n}\n\n.breaker-details tr td a {\n  color: #303030;\n}\n\n.breaker-details tr .document {\n  width: 22%;\n}\n\n.breaker-details tr .devices {\n  width: 6%;\n}\n\n.breaker-details .add-new {\n  color: #2372a0;\n}\n\n.breaker-details .add-new .material-icons {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wc3MtY29uZmlnL0Q6XFxBbmd1bGFyXFxwc3MtcHJvcG9zYWwvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBzcy1jb25maWdcXHBzcy1jb25maWcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHNzLWNvbmZpZy9wc3MtY29uZmlnLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bzcy1jb25maWcvRDpcXEFuZ3VsYXJcXHBzcy1wcm9wb3NhbC9zcmNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUNESjs7QURJSTtFQUNJLFlBQUE7QUNEUjs7QURFUTtFQUNJLGFBQUE7RUFDQSxxQkVFSztFRkRMLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQVo7O0FERVE7RUFDSSxhQUFBO0VBQ0EscUJFTEs7RUZNTCxtQkFBQTtFQUNBLGVBQUE7QUNBWjs7QURDWTtFQUNHLGNFbEJEO0FEbUJkOztBREVRO0VBQ0ksVUFBQTtBQ0FaOztBREVRO0VBQ0ksU0FBQTtBQ0FaOztBRElJO0VBQ0ksY0V6Qk07QUR1QmQ7O0FER1E7RUFDSSxzQkFBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wc3MtY29uZmlnL3Bzcy1jb25maWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJyZWFrZXItZGV0YWlscyB7XHJcbiAgICB0cntcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgdGh7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktYm9yZGVyO1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWJvcmRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnlUZXh0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRvY3VtZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDIyJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRldmljZXMge1xyXG4gICAgICAgICAgICB3aWR0aDogNiU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hZGQtbmV3IHtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnlCbHVlO1xyXG4gICAgICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuZGV0YWlscyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJyZWFrZXItZGV0YWlscyB0ciB7XG4gIHdpZHRoOiAxMDB2dztcbn1cbi5icmVha2VyLWRldGFpbHMgdHIgdGgge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItY29sb3I6ICNlN2U3ZTc7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJyZWFrZXItZGV0YWlscyB0ciB0ZCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1jb2xvcjogI2U3ZTdlNztcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJyZWFrZXItZGV0YWlscyB0ciB0ZCBhIHtcbiAgY29sb3I6ICMzMDMwMzA7XG59XG4uYnJlYWtlci1kZXRhaWxzIHRyIC5kb2N1bWVudCB7XG4gIHdpZHRoOiAyMiU7XG59XG4uYnJlYWtlci1kZXRhaWxzIHRyIC5kZXZpY2VzIHtcbiAgd2lkdGg6IDYlO1xufVxuLmJyZWFrZXItZGV0YWlscyAuYWRkLW5ldyB7XG4gIGNvbG9yOiAjMjM3MmEwO1xufVxuLmJyZWFrZXItZGV0YWlscyAuYWRkLW5ldyAubWF0ZXJpYWwtaWNvbnMge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSIsIiR3aGl0ZTogI2ZmZmZmZjtcclxuJHByaW1hcnktY29sb3I6ICMzODM4Mzg7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM2YjZiNmI7XHJcbiRwcmltYXJ5VGV4dDogIzMwMzAzMDtcclxuXHJcbiRwcmltYXJ5R3JlZW46ICMwZmRmZTE7XHJcbiRwcmltYWFyeS1ncmVlbi0xMjA6ICMwNzljOWM7XHJcbiRzZWNvbmRhcnlHcmVlbjogIzAwZGZlMjtcclxuJHByaW1hcnlCbHVlOiAjMjM3MmEwO1xyXG4kc2Vjb25kYXJ5Qmx1ZTogI2NkZWNmNDtcclxuJHN1Y2Nlc3NDb2xvcjogIzQyYWE1MDtcclxuXHJcbiRwcmltYXJ5LWJvcmRlcjogI2U3ZTdlNztcclxuJHByaW1hcnktYm9yZGVyLTEyMDogI2QxZDFkMTtcclxuJHNlY29uZGFyeS1ib3JkZXI6ICNiYWU1ZjA7XHJcbiRzZWNvbmRhcnktYm9yZGVyLTEyMDogI2ZmZTBjMztcclxuXHJcbiRwcmltYXJ5LWJhY2tncm91bmQ6ICNmNWZiZmQ7XHJcbiRwcmltYXJ5LWJhY2tncm91bmQtMTIwOiAjZTRmNGY0O1xyXG4kcHJpbWFyeS1iYWNrZ3JvdW5kLTEzMDogIzQwOWNiMjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTFkZWcsIHJnYmEoODAsIDE5MCwgMTkwLCAwLjEpIDAlLCByZ2JhKDAsIDE1MywgMTUzLCAwLjEpIDQ4JSwgcmdiYSgwLCAxNTMsIDE3NiwgMC4xKSA3OSUsIHJnYmEoMCwgMTUzLCAyMDMsIDAuMSkgMTAwJSk7XHJcblxyXG4kcHJpbWFyeS1zaGFkb3c6ICNhMWU0ZmI7XHJcbiR5ZWxsby1jb2xvcjogI2U0YmU2MjtcclxuJGFwcEJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYmZiZmIgMCUsICNmZmZmZmYgMTAwJSk7XHJcblxyXG4kcHJpbWFyeUdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoOTFkZWcsICM1MGJlYmUgMCUsICMwMDk5OTkgNDglLCAjMDA5OWIwIDc5JSwgIzAwOTljYiAxMDAlKTtcclxuJHNlY29uZGFyeUdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzNjgyODIsICMwMDY5OGIpOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/pss-config/pss-config.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pss-config/pss-config.component.ts ***!
  \***************************************************************/
/*! exports provided: PssConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PssConfigComponent", function() { return PssConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_c3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/c3.service */ "./src/app/_services/c3.service.ts");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_models */ "./src/app/_models/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_from_compas_drive_dialog_add_from_compas_drive_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-from-compas-drive-dialog/add-from-compas-drive-dialog.component */ "./src/app/components/add-from-compas-drive-dialog/add-from-compas-drive-dialog.component.ts");
/* harmony import */ var src_app_services_share_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/share-file.service */ "./src/app/_services/share-file.service.ts");
/* harmony import */ var ngx_treeview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/src/index.js");








var PssConfigComponent = /** @class */ (function () {
    function PssConfigComponent(c3Services, dialog, shareFileService) {
        this.c3Services = c3Services;
        this.dialog = dialog;
        this.shareFileService = shareFileService;
        this.drawings = null;
    }
    PssConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetTotal();
        this.c3Services.getPssDocument().subscribe(function (data) {
            _this.drawings = data;
            _this.drawings.files = _this.drawings.files.filter(function (item) { return item.title !== 'Proposal16102019.png'; });
            _this.drawings.files.forEach(function (item) {
                item.device = new src_app_models__WEBPACK_IMPORTED_MODULE_3__["FileDevice"]();
            });
        });
    };
    PssConfigComponent.prototype.updateTotal = function () {
        var _this = this;
        this.resetTotal();
        this.drawings.files.forEach(function (item) {
            _this.total.mv_breaker += item.device.mv_breaker;
            _this.total.mv_fuses += item.device.mv_fuses;
            _this.total.mv_trans += item.device.mv_trans;
            _this.total.mv_motor += item.device.mv_motor;
            _this.total.mv_cabs += item.device.mv_cabs;
            _this.total.lv_sw_fuse += item.device.lv_sw_fuse;
            _this.total.lv_adj_brk += item.device.lv_adj_brk;
            _this.total.lv_non_adj_brk += item.device.lv_non_adj_brk;
            _this.total.lv_trans += item.device.lv_trans;
            _this.total.lv_pan_100 += item.device.lv_pan_100;
            _this.total.lv_pan_50 += item.device.lv_pan_50;
            _this.total.lv_cp += item.device.lv_cp;
            _this.total.genset += item.device.genset;
        });
    };
    PssConfigComponent.prototype.resetTotal = function () {
        this.total = {
            mv_breaker: 0,
            mv_fuses: 0,
            mv_trans: 0,
            mv_motor: 0,
            mv_cabs: 0,
            lv_sw_fuse: 0,
            lv_adj_brk: 0,
            lv_non_adj_brk: 0,
            lv_trans: 0,
            lv_pan_100: 0,
            lv_pan_50: 0,
            lv_cp: 0,
            genset: 0
        };
    };
    PssConfigComponent.prototype.openAddFromCompasDriveDialog = function () {
        var _this = this;
        // console.log('Add from compas drive called!!');
        var dialogRef = this.dialog.open(_add_from_compas_drive_dialog_add_from_compas_drive_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddFromCompasDriveDialogComponent"], {
            width: "500px",
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data.length) {
                data.map(function (item) {
                    if (item.checked === true) {
                        item.device = new src_app_models__WEBPACK_IMPORTED_MODULE_3__["FileDevice"]();
                        _this.drawings.files.push(item);
                    }
                });
            }
        });
    };
    PssConfigComponent.prototype.fileChange = function ($event) {
        var _this = this;
        console.log('file events', $event);
        // const user = localStorage.getItem('userId');
        this.filesFromDevice = $event.target.files;
        console.log($event.target.files);
        Array.from(this.filesFromDevice).forEach(function (file) {
            console.log(file);
            _this.shareFileService.addFile(new ngx_treeview__WEBPACK_IMPORTED_MODULE_7__["TreeviewItem"]({ text: file.name, value: 1 }));
            console.log(file);
            _this.c3Services.uploadFile("Global/PSS Documents", file, null, 'comment').subscribe(function (data) {
                // console.log('data inside filechange', data);
                // console.log('file inside filechange', file);
                if (typeof data === 'number') {
                    _this.inProgress = true;
                    // console.log(data);
                    _this.shareFileService.addProgressValue(file.name, data);
                    console.log(data);
                    if (_this.drawings.files.filter(function (item) { return (item.title === file.name); }).length === 0) {
                        _this.drawings.files.push({ title: file.name, url: '', version: '1', createDate: '', modifiedDate: '', device: new src_app_models__WEBPACK_IMPORTED_MODULE_3__["FileDevice"](), loading: data });
                    }
                    else {
                        _this.drawings.files.filter(function (item) { return (item.title === file.name); })[0].loading = data;
                    }
                }
                else if (data.status && data.status != 'Success') {
                    _this.c3Services.getPssDocument().subscribe(function (data) {
                        _this.drawings = data;
                        _this.drawings.files.forEach(function (item) {
                            item.device = new src_app_models__WEBPACK_IMPORTED_MODULE_3__["FileDevice"]();
                        });
                    });
                }
                else {
                    _this.inProgress = false;
                    _this.drawings.files.filter(function (item) { return (item.title === file.name); })[0].url = data.c3Location;
                    // this.message = `
                    // ${this.message} <br>
                    // <a style = 'text-decoration: none;'
                    // href='${data.c3Location}' target='_self'>${data.c3Location.split('/').reverse()[0]}</a>
                    // `;
                    _this.shareFileService.uploadComplete(file.name, data.c3Location);
                }
            });
        });
    };
    PssConfigComponent.prototype.scanDocument = function () {
        var _this = this;
        //this.drawings.files.push();
        this.c3Services.getProposal().subscribe(function (filedata) {
            var file = new File([filedata], "Proposal" + Date.now().toString() + ".png", { lastModified: 1534584790000 });
            ;
            _this.c3Services.uploadFile("Global/PSS Documents", file, null, 'comment').subscribe(function (data) {
                // console.log('data inside filechange', data);
                // console.log('file inside filechange', file);
                if (typeof data === 'number') {
                    _this.inProgress = true;
                    // console.log(data);
                    _this.shareFileService.addProgressValue(file.name, data);
                    console.log(data);
                    if (_this.drawings.files.filter(function (item) { return (item.title === file.name); }).length === 0) {
                        _this.drawings.files.push({
                            title: file.name, url: '', version: '1', createDate: '', modifiedDate: '', device: {
                                mv_breaker: 3,
                                mv_fuses: 2,
                                mv_trans: 1,
                                mv_motor: 0,
                                mv_cabs: 0,
                                lv_sw_fuse: 0,
                                lv_adj_brk: 0,
                                lv_non_adj_brk: 0,
                                lv_trans: 0,
                                lv_pan_100: 0,
                                lv_pan_50: 0,
                                lv_cp: 0,
                                genset: 0
                            }, loading: data
                        });
                        _this.updateTotal();
                    }
                    else {
                        _this.drawings.files.filter(function (item) { return (item.title === file.name); })[0].loading = data;
                    }
                }
                else if (data.status && data.status != 'Success') {
                    _this.c3Services.getPssDocument().subscribe(function (data) {
                        _this.drawings = data;
                        _this.drawings.files.forEach(function (item) {
                            item.device = new src_app_models__WEBPACK_IMPORTED_MODULE_3__["FileDevice"]();
                        });
                    });
                }
                else {
                    _this.inProgress = false;
                    _this.drawings.files.filter(function (item) { return (item.title === file.name); })[0].url = data.c3Location;
                    // this.message = `
                    // ${this.message} <br>
                    // <a style = 'text-decoration: none;'
                    // href='${data.c3Location}' target='_self'>${data.c3Location.split('/').reverse()[0]}</a>
                    // `;
                    _this.shareFileService.uploadComplete(file.name, data.c3Location);
                }
            });
        });
    };
    PssConfigComponent.ctorParameters = function () { return [
        { type: src_app_services_c3_service__WEBPACK_IMPORTED_MODULE_2__["C3Service"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: src_app_services_share_file_service__WEBPACK_IMPORTED_MODULE_6__["ShareFileService"] }
    ]; };
    PssConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pss-config',
            template: __webpack_require__(/*! raw-loader!./pss-config.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pss-config/pss-config.component.html"),
            styles: [__webpack_require__(/*! ./pss-config.component.scss */ "./src/app/components/pss-config/pss-config.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_c3_service__WEBPACK_IMPORTED_MODULE_2__["C3Service"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            src_app_services_share_file_service__WEBPACK_IMPORTED_MODULE_6__["ShareFileService"]])
    ], PssConfigComponent);
    return PssConfigComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
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
    production: false,
    envName: 'd09',
    url: 'https://d09.compasquality.siemens-info.com/'
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

module.exports = __webpack_require__(/*! D:\Angular\pss-proposal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map