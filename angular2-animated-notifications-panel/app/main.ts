import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {NotificationService} from "./shared/index";
import {AppModule} from './app.module';


platformBrowserDynamic().bootstrapModule(AppModule, [
    NotificationService
]);
