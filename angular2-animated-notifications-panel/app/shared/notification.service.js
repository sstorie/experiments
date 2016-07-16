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
var Rx_1 = require("rxjs/Rx");
var enum_extensions_1 = require("./enum-extensions");
var notification_model_1 = require("./notification.model");
var NotificationService = (function () {
    function NotificationService() {
        this.notifications = new Array();
        this.notificationsSubject = new Rx_1.ReplaySubject(1);
        this.notifications$ = this.notificationsSubject.asObservable();
    }
    NotificationService.prototype.startRandomGeneration = function () {
        var _this = this;
        this.randomSub = Rx_1.Observable.interval(5000).subscribe(function () {
            var notification = _this.createRandomNotification();
            _this.addNotification(notification);
        });
    };
    NotificationService.prototype.stopRandomGeneration = function () {
        if (this.randomSub !== undefined) {
            this.randomSub.unsubscribe();
        }
    };
    NotificationService.prototype.addNotification = function (notification) {
        this.notifications = this.notifications.concat([notification]);
        this.notificationsSubject.next(this.notifications);
    };
    NotificationService.prototype.removeNotification = function (id) {
        this.notifications = this.notifications.filter(function (x) { return x.id !== id; });
        this.notificationsSubject.next(this.notifications);
    };
    NotificationService.prototype.clearNotifications = function () {
        this.notifications = new Array();
        this.notificationsSubject.next(this.notifications);
    };
    NotificationService.prototype.createRandomNotification = function () {
        var notification = new notification_model_1.Notification();
        var types = enum_extensions_1.EnumEx.getValues(notification_model_1.NotificationType);
        notification.type = types[Math.floor(Math.random() * types.length)];
        return notification;
    };
    NotificationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
