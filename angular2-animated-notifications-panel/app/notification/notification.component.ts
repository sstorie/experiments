import {
    Component,
    OnInit,
    OnChanges,
    SimpleChanges,
    Input,
    Output,
    EventEmitter,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

import {Notification, NotificationType} from "../shared/index";

@Component({
    moduleId: module.id,
    selector: 'notification',
    templateUrl: 'notification.component.html',
    styleUrls: ['notification.component.css'],
    animations: [
        trigger('visibleTrigger', [
            state('visible', style({ opacity: '1' })),
            transition('void => *', [
                style({ opacity: '0' }),
                animate('200ms 300ms')
            ]),
            transition('* => void', [
                animate('200ms', style({ opacity: '0' }))
            ])
        ])
    ]
})
export class NotificationComponent implements OnInit, OnChanges {
    @Input() notification: Notification;
    @Input() expanded: boolean;
    @Output() remove = new EventEmitter<any>(false);

    expandedState = 'collapsed';

    notificationTypes = NotificationType;

    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["expanded"] !== undefined) {
            this.expandedState = this.expanded ? 'expanded' : 'collapsed';
        }
    }
}