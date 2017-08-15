import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NotificationComponent} from './notification/notification.component';
import { NotificationPanelComponent } from './notification-panel/notification-panel.component'; 
import { NotificationService } from './shared/notification.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NotificationComponent, NotificationPanelComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ NotificationService ]
})
export class AppModule { }
