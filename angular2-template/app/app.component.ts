import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormControl} from '@angular/forms';

// We're using a couple operators from rxjs, so we need to import them
//
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/debounceTime";

@Component({
  selector: 'my-app',
  //
  // KEY IDEA
  //  Using the OnPush strategy will cause issues if you're not careful
  //  and still learning what will trigger Angular to check for changes
  //
  changeDetection: ChangeDetectionStrategy.OnPush,
  //
  // Just load the template so it's not muddy-ing up the component
  //
  templateUrl: "/app/app.template.html",
  //
  // Include the form directives from the new forms release
  //
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AppComponent {
  markForCheck = false;

  lorem = "Bacon ipsum dolor amet beef ribs sirloin short loin tenderloin turkey brisket shankle jowl pig leberkas. Tongue doner porchetta, cupim pork belly frankfurter cow chuck corned beef tenderloin flank alcatra jerky turducken meatloaf. Frankfurter beef ribs ham hock, pancetta cupim bresaola meatball ball tip tongue t-bone sausage ground round tenderloin strip steak. T-bone swine ball tip, sirloin landjaeger boudin turkey drumstick shankle meatball biltong filet mignon tail short ribs. Shank beef boudin filet mignon";
  filteredLorem: string[];
  loremFilter = new FormControl();

  constructor(
    // Inject an instance of Angular's change detector ref
    //
    changeDetectorRef: ChangeDetectorRef
  ) {
    this.filteredLorem = this.lorem.split(" ");

    // Subscribe to changes in the input using the valueChanges observable
    //  so we can use some nice rxjs operators
    //
    this.loremFilter.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe((filter: string) => {
        console.log("New lorem-filter:", filter);

        // Do the actual work to filter out words that don't match 
        //  the current filter value
        //
        this.processLoremFilter(filter);

        // Just leverage the boolean bound to the checkbox in the template
        //
        if (this.markForCheck) {
          // Here we use our change detector instance to tell Angular that this
          //  component should be checked for changes. Without this the updates
          //  just made above won't be reflected in the UI when using 'OnPush'
          //
          changeDetectorRef.markForCheck();
        }
      });
  }

  /**
   * Updates the filteredLorem array to only those words that contain the
   * provided filter. If the filter is empty, then the original lorem string
   * is used.
   */
  private processLoremFilter(filter: string): void {
    let split = this.lorem.split(" ");

    if (filter === "") {
      this.filteredLorem = split;
    }
    else {
      this.filteredLorem = split.filter((word) => { return word.indexOf(filter) > -1; });
    }
  }
}
