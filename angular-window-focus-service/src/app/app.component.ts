import { Component } from '@angular/core';

import { WindowFocusService, FocusStates } from "./window-focus.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  focusState: FocusStates;

  constructor(
    private windowFocusService: WindowFocusService
  ) {
    // Don't worry about destroying this since it's the app component
    //
    this.windowFocusService.focus$.subscribe((state) => {
      this.focusState = state;
      console.log("Window focus changed. New state: ", FocusStates[state]);
    });
  }
}
