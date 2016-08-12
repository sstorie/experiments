import { NgModule, provide }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

export function buildAppModule(apiUrl: string, apiToken: string) {

@NgModule({
  imports: [ BrowserModule ],
  providers: [provide("api.config", { useValue: { apiUrl: apiUrl, apiToken: apiToken} })],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

}