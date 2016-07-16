import {
    Component,
    OnInit,
    OnDestroy,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';
import {Subscription} from "rxjs/Rx";

import {Notification, NotificationService} from "../shared/index";
import {NotificationComponent} from "../notification/index";

@Component({
    moduleId: module.id,
    selector: 'notification-panel',
    directives: [NotificationComponent],
    templateUrl: 'notification-panel.component.html',
    styleUrls: ['notification-panel.component.css'],
    animations: [
        trigger('panelWidthTrigger', [
            state('expanded', style({
                width: '300px'
            })),
            state('collapsed', style({
                width: '38px'
            })),
            transition('collapsed => expanded', animate('200ms ease-in')),
            transition('expanded => collapsed', animate('200ms 200ms ease-out'))
        ]),
        trigger('titleColorTrigger', [
            state('collapsed', style({ 
                backgroundColor: '#FFFFFF',
                color: '#E74C3C'
             })),
            state('expanded', style({ 
                backgroundColor: '#E74C3C',
                color: '#FFFFFF'
            })),
            transition('collapsed => expanded', animate('200ms ease-in')),
            transition('expanded => collapsed', animate('200ms 200ms ease-out'))
        ]),
        trigger('titleTextTrigger', [
            state('in', style({ opacity: '1' })),
            transition('void => *', [
                style({ opacity: '0' }),
                animate('100ms 300ms')
            ]),
            transition('* => void', [
                animate('50ms', style({ opacity: '0' }))
            ])
        ]),
        trigger('iconTrigger', [
            state('collapsed', style({ transform: 'rotate(0deg)' })),
            state('expanded', style({ transform: 'rotate(180deg)' })),
            transition('collapsed => expanded', animate('200ms ease-in')),
            transition('expanded => collapsed', animate('200ms ease-out'))
        ])
    ]
})
export class NotificationPanelComponent implements OnInit, OnDestroy {
    expanded = false;
    expandedState = 'collapsed';

    notifications: Notification[];
    notificationSub: Subscription;

    constructor(
        private notificationService: NotificationService
    ) { 
    }

    ngOnInit() {
    	this.notificationSub = this.notificationService.notifications$.subscribe((notifications) => {
            this.notifications = notifications.sort((a, b) => b.date.valueOf() - a.date.valueOf()).slice(0, 10);
        });
     }

    ngOnDestroy() {
        this.notificationSub.unsubscribe();
    }

    toggleExpandedState() {
        this.expandedState = this.expanded ? 'collapsed' : 'expanded';
        this.expanded = !this.expanded;
    }

}