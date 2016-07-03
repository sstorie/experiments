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
var index_1 = require("../shared/index");
var EditComponent = (function () {
    function EditComponent() {
        this.entity = new index_1.Entity();
    }
    EditComponent.prototype.ngOnInit = function () { };
    EditComponent.prototype.resetEntity = function () {
        console.log("resetting entity");
        this.entity = new index_1.Entity();
    };
    EditComponent.prototype.saveEntity = function (entityToSave) {
        console.log("saving entity", entityToSave);
        this.resetEntity();
    };
    EditComponent.prototype.canDeactivate = function () {
        return this.entityForm.canDeactivate();
    };
    __decorate([
        core_1.ViewChild(index_1.EntityFormComponent), 
        __metadata('design:type', index_1.EntityFormComponent)
    ], EditComponent.prototype, "entityForm", void 0);
    EditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            directives: [index_1.EntityFormComponent],
            templateUrl: 'edit.component.html',
            styleUrls: ["edit.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
