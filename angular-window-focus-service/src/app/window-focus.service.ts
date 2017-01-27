import { Injectable, NgZone } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs/Rx";

/**
 * Simple function to return the window object
 */
function getWindow(): Window {
  return window;
}

/**
 * Sinple function to return the document object
 */
function getDocument(): Document {
  return document;
}

/**
 * An enum that indicates whether the window has focus or not (regardless
 * of whether it's tab or window focus)
 */
export enum FocusStates {
  Focus = 1,
  Blur = 2
}

/**
 * An enum that provides detailed information about the focus state
 */
export enum DetailedFocusStates {
  TabFocus,
  TabBlur,
  WindowFocus,
  WindowBlur
}


@Injectable()
export class WindowFocusService {

  /**
 * A simple stream that emits a new value when the focus changes, but combines
 * the tab/window focus into a single pair of values
 */
  focus$: Observable<FocusStates>;

  /**
   * A stream of focus values that emits a new value when a focus change is
   * detected.
   */
  detailedFocus$: Observable<DetailedFocusStates>;

  private detailedFocusSubject: BehaviorSubject<DetailedFocusStates>;

  // We type these as any so we can access properties that are outside the type definition
  //
  private window: any;
  private document: any;

  constructor(
    private zone: NgZone
  ) {
    this.window = getWindow();
    this.document = getDocument();

    const initialFocus = this.document["visibilityState"] === "visible"
      ? DetailedFocusStates.TabFocus
      : DetailedFocusStates.TabBlur;

    this.detailedFocusSubject = new BehaviorSubject<DetailedFocusStates>(initialFocus);

    // Wire up the detailed focus observable
    //
    this.detailedFocus$ = this.detailedFocusSubject
      .asObservable()
      .distinctUntilChanged();

    // Now wire up the more generic observable by mapping the detailed values to the
    //  broader ones. We also add distinct until changed because we might get both
    //  a tab and window event fired, and we don't want to emit duplicates
    //
    this.focus$ = this.detailedFocus$
      .map((focus) => {
        switch (focus) {
          case DetailedFocusStates.WindowFocus:
          case DetailedFocusStates.TabFocus:
            {
              return FocusStates.Focus;
            }
        }
        return FocusStates.Blur;
      })
      .distinctUntilChanged();


    this.zone.run(() => {

      this.document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          this.detailedFocusSubject.next(DetailedFocusStates.TabFocus);
        } else {
          this.detailedFocusSubject.next(DetailedFocusStates.TabBlur);
        }
      });

      /////////////////////////////////////////
      // check if browser window has focus		
      let notIE = (this.document.documentMode === undefined),
        isChromium = this.window.chrome;

      if (notIE && !isChromium) {

        // checks for Firefox and other  NON IE Chrome versions
        this.window.on("focusin",
          () => {

            setTimeout(() => {
              this.detailedFocusSubject.next(DetailedFocusStates.WindowFocus);

            },
              300);

          });

        this.window.on("focusout", () => {
          this.detailedFocusSubject.next(DetailedFocusStates.WindowBlur);

        });

      } else {

        // checks for IE and Chromium versions
        if (this.window.addEventListener) {

          // bind focus event
          this.window.addEventListener("focus", (event: any) => {

            setTimeout(() => {
              this.detailedFocusSubject.next(DetailedFocusStates.WindowFocus);
            },
              300);

          },
            false);

          // bind blur event
          this.window.addEventListener("blur", (event: any) => {
            this.detailedFocusSubject.next(DetailedFocusStates.WindowBlur);
          },
            false);

        } else {

          // bind focus event
          this.window.attachEvent("focus", (event: any) => {

            setTimeout(() => {
              this.detailedFocusSubject.next(DetailedFocusStates.WindowFocus);
            },
              300);

          });

          // bind focus event
          this.window.attachEvent("blur", (event: any) => {
            this.detailedFocusSubject.next(DetailedFocusStates.WindowBlur);
          });
        }
      }
    });
  }

}
