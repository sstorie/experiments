import { bootstrap } from '@angular/platform-browser-dynamic';

import {NotificationService} from "./shared/index";
import {AppComponent} from './app.component';


bootstrap(AppComponent, [
    NotificationService
]);
