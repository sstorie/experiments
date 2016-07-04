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
        trigger('detailsTrigger', [
            state('in', style({ opacity: '1' })),
            transition('void => *', [
                style({ opacity: '0' }),
                animate('200ms 300ms')
            ]),
            transition('* => void', [
                animate('200ms', style({ opacity: '0' }))
            ])
        ]),
        trigger('iconTrigger', [
            state('collapsed', style({ fontSize: '1.0em' })),
            state('expanded', style({ fontSize: '1.5em' })),
            transition('collapsed => expanded', animate('200ms ease-in')),
            transition('expanded => collapsed', animate('200ms ease-out'))
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