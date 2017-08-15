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
    templateUrl: 'notification-panel.component.html',
    styleUrls: ['notification-panel.component.css'],
    animations: [
        // Define the animation used on the containing dev where the width of the
        //  panel is determined. Here we define the expanded width to be 300px, and
        //  the collapsed width to be 38px.
        //
        // When expanding the panel we transition over a 200ms interval.
        //
        // When collapsing the panel we again use 200ms for the transition, but
        //  we add a delay of 200ms to allow some other animations to complete before
        //  shrinking the panel down.
        //
        trigger('panelWidthTrigger', [
            state('expanded', style({ width: '300px' })),
            state('collapsed', style({ width: '38px' })),
            transition('collapsed => expanded', animate('200ms ease-in')),
            transition('expanded => collapsed', animate('200ms 200ms ease-out'))
        ]),

        // Define the animation used in the title bar where the colors swap from
        //  a red foreground with white background, to the opposite. In this case
        //  we use the same timings as the width animation above so these two
        //  transitions happen at the same time
        //
        trigger('titleColorTrigger', [
            state('collapsed', style({ backgroundColor: '#FFFFFF', color: '#E74C3C' })),
            state('expanded', style({ backgroundColor: '#E74C3C', color: '#FFFFFF' })),
            transition('collapsed => expanded', animate('200ms ease-in')),
            transition('expanded => collapsed', animate('200ms 200ms ease-out'))
        ]),

        // The title text trigger is a little different because it's an animation
        //  for an element being added to the DOM. Here we take advantage of the 'void'
        //  transition using a hard-coded state called 'in' (which is also hard coded in
        //  the template).
        //
        // What we do in this animation is say when the element is added to the DOM
        //  it should have an opacity of 0 (i.e., hidden), wait 300ms, and then animate
        //  it's opacity change to 1 over a 100 ms time span. This effectively delays the
        //  appearance of the text until after the panel has slid out to the full size.
        //
        // When the element is removed we take a different approach and animate the
        //  opacity change back to 0 over a short 50ms interval. This ensures it's gone before
        //  the panel starts to slide back in, creating a nice effect.
        //
        trigger('titleTextTrigger', [
            state('in', style({ opacity: '1' })),
            transition('void => *', [style({ opacity: '0' }),
                animate('100ms 300ms')
            ]),
            transition('* => void', [
                animate('50ms', style({ opacity: '0' }))
            ])
        ]),

        // Define the animation used in the arrow icon where it rotates to point left
        //  or right based on the state of the panel. In this case we use the same 
        //  timings as the width animation above so these two transitions happen at 
        //  the same time.
        //
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
