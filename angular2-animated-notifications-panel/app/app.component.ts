import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import {NotificationsComponent} from "./notifications/index";

@Component({
  selector: 'my-app',
  moduleId: module.id,
  directives: [NotificationsComponent],
  templateUrl: "app.component.html",
  styleUrls: ['app.component.css']
})
export class AppComponent {
}
