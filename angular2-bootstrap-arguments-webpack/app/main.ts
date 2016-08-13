///<reference path="../typings/index.d.ts"/>

import "es6-shim";
import "zone.js/dist/zone";
import "reflect-metadata";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {AppModule} from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule);