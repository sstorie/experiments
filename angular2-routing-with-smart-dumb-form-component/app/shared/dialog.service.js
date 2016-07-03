"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implementation that doesn't use window.confirm
 */
var DialogService = (function () {
    function DialogService() {
    }
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns promise resolving to `true`=confirm or `false`=cancel
     */
    DialogService.prototype.confirm = function (message) {
        return new Promise(function (resolve) {
            return resolve(window.confirm(message || 'Is it OK?'));
        });
    };
    ;
    DialogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DialogService);
    return DialogService;
}());
exports.DialogService = DialogService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
