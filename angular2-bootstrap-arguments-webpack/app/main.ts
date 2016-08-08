///<reference path="../typings/index.d.ts"/>

import "es6-shim";
import "zone.js/dist/zone";
import "reflect-metadata";

import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from "@angular/core";

import {AppComponent} from './app.component';
import {ApiConfig} from "./api.service";

// Expose the exports from the 'main' module into the global scope 
//  object called 'MainModule'. This is how we can wrap the Angular 2 
//  bootstrap() call in a wrapping function that we can pass arguments to.
//  
require("expose?MainModule!./main");

// Here is the overall technique. Instead of just calling Angular's
//  bootstrap method directly, we'll export a function that accepts
//  arguments. This provides a way to "inject" external data into
//  the process, and change how Angular is bootstrapped based on
//  the provided input.
//
export function RunApplication(apiUrl: string, apiToken: string) {

    // Create our API config provider using the external data
    //
    let apiConfig = new ApiConfig();
    apiConfig.apiUrl = apiUrl;
    apiConfig.apiToken = apiToken;

    // Now we can call bootstrap, but we have the API config object
    //  set up as well. Just create is as an injectable token here
    //  so other components/services can consume it.
    //
    bootstrap(AppComponent, [
        provide("api.config", { useValue: apiConfig })
    ])
    .catch(err => console.error(err));
}
