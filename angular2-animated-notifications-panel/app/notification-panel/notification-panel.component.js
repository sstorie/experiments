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
var index_2 = require("../notification/index");
var NotificationPanelComponent = (function () {
    function NotificationPanelComponent(notificationService) {
        this.notificationService = notificationService;
        this.expanded = false;
        this.expandedState = 'collapsed';
    }
    NotificationPanelComponent.prototype.ngOnInit = function () { };
    NotificationPanelComponent.prototype.toggleExpandedState = function () {
        this.expandedState = this.expanded ? 'collapsed' : 'expanded';
        this.expanded = !this.expanded;
    };
    NotificationPanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'notification-panel',
            directives: [index_2.NotificationComponent],
            templateUrl: 'notification-panel.component.html',
            styleUrls: ['notification-panel.component.css'],
            animations: [
                core_1.trigger('panelWidthTrigger', [
                    core_1.state('expanded', core_1.style({
                        width: '300px'
                    })),
                    core_1.state('collapsed', core_1.style({
                        width: '38px'
                    })),
                    core_1.transition('collapsed => expanded', core_1.animate('200ms ease-in')),
                    core_1.transition('expanded => collapsed', core_1.animate('200ms 200ms ease-out'))
                ]),
                core_1.trigger('titleColorTrigger', [
                    core_1.state('collapsed', core_1.style({
                        backgroundColor: '#FFFFFF',
                        color: '#E74C3C'
                    })),
                    core_1.state('expanded', core_1.style({
                        backgroundColor: '#E74C3C',
                        color: '#FFFFFF'
                    })),
                    core_1.transition('collapsed => expanded', core_1.animate('200ms ease-in')),
                    core_1.transition('expanded => collapsed', core_1.animate('200ms 200ms ease-out'))
                ]),
                core_1.trigger('titleTextTrigger', [
                    core_1.state('in', core_1.style({ opacity: '1' })),
                    core_1.transition('void => *', [
                        core_1.style({ opacity: '0' }),
                        core_1.animate('100ms 300ms')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('50ms', core_1.style({ opacity: '0' }))
                    ])
                ]),
                core_1.trigger('iconTrigger', [
                    core_1.state('collapsed', core_1.style({ transform: 'rotate(0deg)' })),
                    core_1.state('expanded', core_1.style({ transform: 'rotate(180deg)' })),
                    core_1.transition('collapsed => expanded', core_1.animate('200ms ease-in')),
                    core_1.transition('expanded => collapsed', core_1.animate('200ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [index_1.NotificationService])
    ], NotificationPanelComponent);
    return NotificationPanelComponent;
}());
exports.NotificationPanelComponent = NotificationPanelComponent;
