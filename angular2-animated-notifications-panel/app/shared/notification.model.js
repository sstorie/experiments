"use strict";
(function (NotificationType) {
    NotificationType[NotificationType["Comment"] = 0] = "Comment";
    NotificationType[NotificationType["Alert"] = 1] = "Alert";
    NotificationType[NotificationType["Code"] = 2] = "Code";
    NotificationType[NotificationType["Payment"] = 3] = "Payment";
})(exports.NotificationType || (exports.NotificationType = {}));
var NotificationType = exports.NotificationType;
var Notification = (function () {
    function Notification() {
        this.id = this.generateUUID();
        this.date = new Date();
        var chance = new Chance();
        this.message = chance.sentence({ words: 5 });
    }
    /**
     * A simple method to generate a GUID-like value that is (for our
     * purposes) unique every time.
     */
    Notification.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    ;
    return Notification;
}());
exports.Notification = Notification;
