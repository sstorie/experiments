import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import "rxjs/add/operator/map";

import {ChannelService, ChannelConfig, SignalrWindow} from "./services/channel.service";

import { AppComponent }   from './app.component';
import { TaskComponent }  from "./task.component";

let channelConfig = new ChannelConfig();
channelConfig.url = "http://localhost:9123/signalr";
channelConfig.hubName = "EventHub";

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, TaskComponent ],
  providers: [
    ChannelService,
    { provide: SignalrWindow, useValue: window },
    { provide: 'channel.config', useValue: channelConfig }
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }