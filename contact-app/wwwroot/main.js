(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactlist/contactlist.component */ "./src/app/contactlist/contactlist.component.ts");





var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'contactlist' },
    { path: 'contactlist', component: _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_4__["ContactlistComponent"] },
    { path: 'contactform', component: _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__["ContactformComponent"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <span>Contact Manager</span>\r\n</mat-toolbar>\r\n<router-outlet></router-outlet>\r\n"

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
        this.title = 'Contact Manager';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]
            ],
        })
    ], AppMaterialModule);
    return AppMaterialModule;
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contactlist/contactlist.component */ "./src/app/contactlist/contactlist.component.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_12__);













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_9__["ContactformComponent"],
                _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_10__["ContactlistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_services_contact_service__WEBPACK_IMPORTED_MODULE_11__["ContactService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactform/contactform.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contactform/contactform.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdGZvcm0vY29udGFjdGZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3Rmb3JtL2NvbnRhY3Rmb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contactform/contactform.component.html":
/*!********************************************************!*\
  !*** ./src/app/contactform/contactform.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(contactFrm)\" [formGroup]=\"contactFrm\">\r\n  <h2>{{data.modalTitle}}</h2>\r\n\r\n  <div>\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Name</mat-label>\r\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\r\n      <!-- <mat-hint>Hint</mat-hint> -->\r\n      <mat-error *ngIf=\"formErrors.name\">\r\n        {{ formErrors.name }}\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Email</mat-label>\r\n      <input type=\"email\" matInput placeholder=\"email\" formControlName=\"email\">\r\n      <mat-error *ngIf=\"formErrors.email\">\r\n        {{ formErrors.email }}\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n  </div>\r\n  <p>\r\n    <mat-radio-group class=\"contact-radio-group\" formControlName=\"gender\">\r\n      <mat-radio-button class=\"contact-radio-button\" *ngFor=\"let gndr of genders\" [value]=\"gndr.id\">\r\n        {{ gndr.name }}\r\n      </mat-radio-button>\r\n    </mat-radio-group>\r\n    <mat-error *ngIf=\"formErrors.gender\">\r\n      {{ formErrors.gender }}\r\n    </mat-error>\r\n  </p>\r\n  <div>\r\n    <mat-form-field appearance=\"outline\">\r\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a birthday\" formControlName=\"birthDate\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n\r\n      <mat-error *ngIf=\"formErrors.birthDate \">\r\n        {{ formErrors.birthDate }}\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-select placeholder=\"Select a Technology\" formControlName=\"techno\">\r\n        <mat-option>-- None --</mat-option>\r\n        <mat-option *ngFor=\"let techno  of technologies\" [value]=\"techno\">\r\n          {{ techno }}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"formErrors.techno \">\r\n        {{ formErrors.techno }}\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field appearance=\"outline\">\r\n      <textarea matInput placeholder=\"Message...\" formControlName=\"message\"></textarea>\r\n      <mat-error *ngIf=\"formErrors.message \">\r\n        {{ formErrors.message }}\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n\r\n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>&nbsp;\r\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"contactFrm.invalid\">{{data.modalBtnTitle}}</button>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/contactform/contactform.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactform/contactform.component.ts ***!
  \******************************************************/
/*! exports provided: ContactformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactformComponent", function() { return ContactformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");







var ContactformComponent = /** @class */ (function () {
    function ContactformComponent(data, fb, _contactService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._contactService = _contactService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        this.genders = [];
        this.technologies = [];
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'name': '',
            'email': '',
            'gender': '',
            'birthDate': '',
            'techno': '',
            'message': ''
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'name': {
                'maxlength': 'Name cannot be more than 50 characters long.',
                'required': 'Name is required.'
            },
            'email': {
                'email': 'Invalid email format.',
                'required': 'Email is required.'
            },
            'gender': {
                'required': 'Gender is required.'
            },
            'techno': {
                'required': 'Technology is required.'
            },
            'birthDate': {
                'required': 'Birthday is required.'
            },
            'message': {
                'required': 'message is required.'
            }
        };
    }
    ContactformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // built contact form
        this.contactFrm = this.fb.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            birthDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            techno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.genders = _shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].genders;
        this.technologies = _shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].technologies;
        // subscribe on value changed event of form to show validation message
        this.contactFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create) {
            this.contactFrm.reset();
        }
        else {
            this.contactFrm.setValue(this.data.contact);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete ? false : true);
    };
    // form value change event
    ContactformComponent.prototype.onValueChanged = function (data) {
        if (!this.contactFrm) {
            return;
        }
        var form = this.contactFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ContactformComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var contactData = this.mapDateData(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                contactData.id = 0;
                this._contactService.addContact(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'addContact', contactData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
                this._contactService.updateContact(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'updateContact', contactData.id, contactData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
                this._contactService.deleteContact(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'deleteContact', contactData.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    ContactformComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.contactFrm.enable() : this.contactFrm.disable();
    };
    ContactformComponent.prototype.mapDateData = function (contact) {
        contact.birthDate = new Date(contact.birthDate).toISOString();
        return contact;
    };
    ContactformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactform',
            template: __webpack_require__(/*! ./contactform.component.html */ "./src/app/contactform/contactform.component.html"),
            styles: [__webpack_require__(/*! ./contactform.component.css */ "./src/app/contactform/contactform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], ContactformComponent);
    return ContactformComponent;
}());



/***/ }),

/***/ "./src/app/contactlist/contactlist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contactlist/contactlist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\r\n  top: 45%;\r\n  left: 47%;\r\n  position: fixed;\r\n}\r\n\r\n.contactlist-container, #paginator {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 300px;\r\n  max-width: 1200px;\r\n  max-height: 700px;\r\n  overflow: auto;\r\n  margin: 0 auto;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  table-layout: fixed;\r\n  margin:10px;\r\n}\r\n\r\nth, td {\r\n  overflow: hidden;\r\n  width: 200px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.horizontalDivider {\r\n  width: 5px;\r\n  height: auto;\r\n  display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdGxpc3QvY29udGFjdGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdGxpc3QvY29udGFjdGxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyIHtcclxuICB0b3A6IDQ1JTtcclxuICBsZWZ0OiA0NyU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4uY29udGFjdGxpc3QtY29udGFpbmVyLCAjcGFnaW5hdG9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXgtaGVpZ2h0OiA3MDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICBtYXJnaW46MTBweDtcclxufVxyXG5cclxudGgsIHRkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbERpdmlkZXIge1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/contactlist/contactlist.component.html":
/*!********************************************************!*\
  !*** ./src/app/contactlist/contactlist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else contactlist\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n<ng-template class=\"contactlist\" #contactlist>\r\n  <h2 style=\"text-align: center;\">Contact List</h2>\r\n  <div class=\"contactlist-container mat-elevation-z8\">\r\n    <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addContact()\">Create</button></div>\r\n    <mat-table #Table [dataSource]=\"dataSource\">\r\n\r\n      <!-- Id Column -->\r\n      <!-- <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef> Id </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n      </ng-container> -->\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef> Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Email Column -->\r\n      <ng-container matColumnDef=\"email\">\r\n        <th mat-header-cell *matHeaderCellDef> Email </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Gender Column -->\r\n      <ng-container matColumnDef=\"gender\">\r\n        <th mat-header-cell *matHeaderCellDef> Gender </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{getGender(element.gender)}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Birth Column -->\r\n      <ng-container matColumnDef=\"birth\">\r\n        <th mat-header-cell *matHeaderCellDef> Birthday </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.birthDate | date: 'dd-MM-yyyy' }} </td>\r\n      </ng-container>\r\n\r\n      <!-- Technology Column -->\r\n      <ng-container matColumnDef=\"techno\">\r\n        <th mat-header-cell *matHeaderCellDef> Technology </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.techno}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Message Column -->\r\n      <ng-container matColumnDef=\"message\">\r\n        <th mat-header-cell *matHeaderCellDef> Message </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.message}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"action\">\r\n        <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\">\r\n          <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editContact(element.id)\">Edit</button>\r\n          <div class=\"horizontalDivider\"></div>\r\n          <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteContact(element.id)\">Delete</button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </mat-table>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/contactlist/contactlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactlist/contactlist.component.ts ***!
  \******************************************************/
/*! exports provided: ContactlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactlistComponent", function() { return ContactlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");








var ContactlistComponent = /** @class */ (function () {
    function ContactlistComponent(snackBar, _contactService, dialog) {
        this.snackBar = snackBar;
        this._contactService = _contactService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        this.displayedColumns = ['name', 'email', 'gender', 'birth', 'techno', 'message', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ContactlistComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadContacts();
    };
    ContactlistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__["ContactformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, contact: this.contact }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadContacts();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                // this.showMessage('Please try again, something went wrong');
            }
        });
    };
    ContactlistComponent.prototype.loadContacts = function () {
        var _this = this;
        this._contactService.getAllContact(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'getAllContact')
            .subscribe(function (contacts) {
            _this.loadingState = false;
            _this.dataSource.data = contacts;
        });
    };
    ContactlistComponent.prototype.getGender = function (gender) {
        return _shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].genders.filter(function (ele) { return ele.id === gender; }).map(function (ele) { return ele.name; })[0];
    };
    ContactlistComponent.prototype.addContact = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create;
        this.modalTitle = 'Add New Contact';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    ContactlistComponent.prototype.editContact = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update;
        this.modalTitle = 'Edit Contact';
        this.modalBtnTitle = 'Update';
        this.contact = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ContactlistComponent.prototype.deleteContact = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.contact = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ContactlistComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    ContactlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactlist',
            template: __webpack_require__(/*! ./contactlist.component.html */ "./src/app/contactlist/contactlist.component.html"),
            styles: [__webpack_require__(/*! ./contactlist.component.css */ "./src/app/contactlist/contactlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ContactlistComponent);
    return ContactlistComponent;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};
var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    // get all contact data    
    ContactService.prototype.getAllContact = function (url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // insert new contact details    
    ContactService.prototype.addContact = function (url, contact) {
        // JSON.parse(JSON.stringify(contact))
        // {'email':'a@a.com'}
        return this.http.post(url, contact, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // update contact details    
    ContactService.prototype.updateContact = function (url, id, contact) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, contact, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // delete contact information    
    ContactService.prototype.deleteContact = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/contact?id=42    
        return this.http.delete(newurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // custom handler    
    ContactService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.    
            console.error('An error occurred:', error.error.message);
        }
        else {
            // the backend returned an unsuccessful response code.    
            // the response body may contain clues as to what went wrong,    
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message    
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/shared/DBOperation.ts":
/*!***************************************!*\
  !*** ./src/app/shared/DBOperation.ts ***!
  \***************************************/
/*! exports provided: DBOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBOperation", function() { return DBOperation; });
var DBOperation;
(function (DBOperation) {
    DBOperation[DBOperation["create"] = 1] = "create";
    DBOperation[DBOperation["update"] = 2] = "update";
    DBOperation[DBOperation["delete"] = 3] = "delete";
})(DBOperation || (DBOperation = {}));


/***/ }),

/***/ "./src/app/shared/Global.ts":
/*!**********************************!*\
  !*** ./src/app/shared/Global.ts ***!
  \**********************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.BASE_USER_ENDPOINT = 'api/contact/';
    Global.genders = [{
            name: 'Male',
            id: 0,
        }, {
            name: 'Female',
            id: 1
        }];
    Global.technologies = ['JavaScript', 'SharePoint', 'C#'];
    return Global;
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

module.exports = __webpack_require__(/*! C:\Users\kumar.thamilarasan\Downloads\contactapp\contact-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map