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
var forms_1 = require("@angular/forms");
var Rx_1 = require("rxjs/Rx");
var index_1 = require("../index");
var index_2 = require("../index");
var EntityFormComponent = (function () {
    function EntityFormComponent(dialogService, formBuilder, changeDetectorRef) {
        this.dialogService = dialogService;
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.reset = new core_1.EventEmitter(false);
        this.save = new core_1.EventEmitter(false);
        this.active = true;
    }
    EntityFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    EntityFormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        console.log("Changes in EntityForm", changes);
        this.buildForm();
        /// W....T....F....???
        //  work around the issue where Angular doesn't provide a way
        //  to actually reset a form. We need to rebuild it and get it 
        //  to be re-created in the DOM.
        //
        // Using setTimeout will also run the callback outside of Angular's 
        //  change detection, since we're using OnPush, so we need to mark 
        //  this component to be checked for changes manually.
        //
        this.active = false;
        setTimeout(function () {
            _this.active = true;
            _this.changeDetectorRef.markForCheck();
        }, 0);
    };
    EntityFormComponent.prototype.buildForm = function () {
        this.entityForm = this.formBuilder.group({
            stringValue: [this.entity.stringValue, forms_1.Validators.required],
            numberValue: [this.entity.numberValue, forms_1.Validators.required]
        });
    };
    EntityFormComponent.prototype.submit = function () {
        var entityToSave = new index_2.Entity();
        entityToSave.stringValue = this.entityForm.controls["stringValue"].value;
        entityToSave.numberValue = this.entityForm.controls["numberValue"].value;
        this.save.emit(entityToSave);
    };
    EntityFormComponent.prototype.canDeactivate = function () {
        if (this.entityForm.pristine) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        var p = this.dialogService.confirm('Discard changes?');
        var o = Rx_1.Observable.fromPromise(p);
        return o;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_2.Entity)
    ], EntityFormComponent.prototype, "entity", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EntityFormComponent.prototype, "reset", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EntityFormComponent.prototype, "save", void 0);
    EntityFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'entity-form',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            templateUrl: 'entity-form.component.html',
            styleUrls: ['entity-form.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.DialogService, forms_1.FormBuilder, core_1.ChangeDetectorRef])
    ], EntityFormComponent);
    return EntityFormComponent;
}());
exports.EntityFormComponent = EntityFormComponent;
