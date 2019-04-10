import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    // get all contact data    
    ContactService.prototype.getAllContact = function (url) {
        return this.http.get(url).pipe(catchError(this.handleError));
    };
    // insert new contact details    
    ContactService.prototype.addContact = function (url, contact) {
        return this.http.post(url, JSON.stringify(contact), httpOptions).pipe(catchError(this.handleError));
    };
    // update contact details    
    ContactService.prototype.updateContact = function (url, id, contact) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, contact, httpOptions).pipe(catchError(this.handleError));
    };
    // delete contact information    
    ContactService.prototype.deleteContact = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/contact?id=42    
        return this.http.delete(newurl, httpOptions).pipe(catchError(this.handleError));
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
        return throwError('Something bad happened; please try again later.');
    };
    ContactService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ContactService);
    return ContactService;
}());
export { ContactService };
//# sourceMappingURL=contact.service.js.map