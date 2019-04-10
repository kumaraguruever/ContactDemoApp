import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactService } from '../services/contact.service';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';
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
            'birth': '',
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
            'birth': {
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
            name: ['', [Validators.required, Validators.maxLength(50)]],
            email: ['', [Validators.required, Validators.email]],
            gender: ['', [Validators.required]],
            birth: ['', [Validators.required]],
            techno: ['', [Validators.required]],
            message: ['', [Validators.required]]
        });
        this.genders = Global.genders;
        this.technologies = Global.technologies;
        // subscribe on value changed event of form to show validation message
        this.contactFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === DBOperation.create) {
            this.contactFrm.reset();
        }
        else {
            this.contactFrm.setValue(this.data.contact);
        }
        this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
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
            case DBOperation.create:
                this._contactService.addContact(Global.BASE_USER_ENDPOINT + 'addContact', contactData).subscribe(function (data) {
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
            case DBOperation.update:
                this._contactService.updateContact(Global.BASE_USER_ENDPOINT + 'updateContact', contactData.id, contactData).subscribe(function (data) {
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
            case DBOperation.delete:
                this._contactService.deleteContact(Global.BASE_USER_ENDPOINT + 'deleteContact', contactData.id).subscribe(function (data) {
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
        contact.birth = new Date(contact.birth).toISOString();
        return contact;
    };
    ContactformComponent = tslib_1.__decorate([
        Component({
            selector: 'app-contactform',
            templateUrl: './contactform.component.html',
            styleUrls: ['./contactform.component.css']
        }),
        tslib_1.__param(0, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [Object, FormBuilder,
            ContactService,
            MatDialogRef])
    ], ContactformComponent);
    return ContactformComponent;
}());
export { ContactformComponent };
//# sourceMappingURL=contactform.component.js.map