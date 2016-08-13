import { NgModule, provide }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  //
  // Here's where we access the data set by the server in the original
  //  index.html page. We can take advantage of the factory method of
  //  creating a provider, and use the anonymous function to access the
  //  data off of the 'window' object at run-time.
  //
  providers: [{provide: "api.config", useFactory: () => window['appdata']}],
})
export class AppModule { }
