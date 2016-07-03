import {
    Component,
    OnInit,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'notifications',
    templateUrl: 'notifications.component.html',
    styleUrls: ['notifications.component.css'],
    animations: [
        trigger('panelWidthTrigger', [
            state('expanded', style({
                width: '300px'
            })),
            state('collapsed', style({
                width: '50px'
            })),
            transition('collapsed => expanded', animate('300ms ease-in')),
            transition('expanded => collapsed', animate('300ms ease-out'))
        ]),
        trigger('titleTextTrigger', [
            state('in', style({ opacity: '1' })),
            transition('void => *', [
                style({ opacity: '0' }),
                animate('100ms 300ms')
            ]),
            transition('* => void', [
                animate('100ms', style({ opacity: '0' }))
            ])
        ]),
        trigger('iconTrigger', [
            state('collapsed', style({ transform: 'rotate(0deg)' })),
            state('expanded', style({ transform: 'rotate(180deg)' })),
            transition('collapsed => expanded', animate('300ms ease-in')),
            transition('expanded => collapsed', animate('300ms ease-out'))
        ])
    ]
})
export class NotificationsComponent implements OnInit {
    expanded = false;
    expandedState = 'collapsed';

    constructor() { }

    ngOnInit() { }

    toggleExpandedState() {
        this.expandedState = this.expanded ? 'collapsed' : 'expanded';
        this.expanded = !this.expanded;
    }

}