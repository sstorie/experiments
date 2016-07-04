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
var NotificationComponent = (function () {
    function NotificationComponent() {
        this.remove = new core_1.EventEmitter(false);
        this.expandedState = 'collapsed';
        this.notificationTypes = index_1.NotificationType;
    }
    NotificationComponent.prototype.ngOnInit = function () { };
    NotificationComponent.prototype.ngOnChanges = function (changes) {
        if (changes["expanded"] !== undefined) {
            this.expandedState = this.expanded ? 'expanded' : 'collapsed';
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Notification)
    ], NotificationComponent.prototype, "notification", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NotificationComponent.prototype, "expanded", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NotificationComponent.prototype, "remove", void 0);
    NotificationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'notification',
            templateUrl: 'notification.component.html',
            styleUrls: ['notification.component.css'],
            animations: [
                core_1.trigger('detailsTrigger', [
                    core_1.state('in', core_1.style({ opacity: '1' })),
                    core_1.transition('void => *', [
                        core_1.style({ opacity: '0' }),
                        core_1.animate('200ms 300ms')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('200ms', core_1.style({ opacity: '0' }))
                    ])
                ]),
                core_1.trigger('iconTrigger', [
                    core_1.state('collapsed', core_1.style({ fontSize: '1.0em' })),
                    core_1.state('expanded', core_1.style({ fontSize: '1.5em' })),
                    core_1.transition('collapsed => expanded', core_1.animate('200ms ease-in')),
                    core_1.transition('expanded => collapsed', core_1.animate('200ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;
