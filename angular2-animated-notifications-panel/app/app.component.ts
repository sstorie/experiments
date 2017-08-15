import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import {NotificationService} from "./shared/index";
import {NotificationPanelComponent} from "./notification-panel/index";

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: "app.component.html",
  styleUrls: ['app.component.css']
})
export class AppComponent {

  constructor(
    private notificationService: NotificationService
  ) {
    
    for(let i = 0; i < 10; i++) {
      let n = this.notificationService.createRandomNotification();
      this.notificationService.addNotification(n);
    }

    this.notificationService.startRandomGeneration();
  }
}
