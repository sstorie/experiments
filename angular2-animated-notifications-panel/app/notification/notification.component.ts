import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Notification, NotificationType} from "../shared/index";

@Component({
    moduleId: module.id,
    selector: 'notification',
    templateUrl: 'notification.component.html',
    styleUrls: ['notification.component.css']
})
export class NotificationComponent implements OnInit {
    @Input() notification: Notification;
    @Input() expanded: boolean;
    @Output() remove = new EventEmitter<any>(false);

    notificationTypes = NotificationType;
    
    constructor() { }

    ngOnInit() { }

}