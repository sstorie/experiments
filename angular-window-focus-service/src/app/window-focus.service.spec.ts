/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WindowFocusService } from './window-focus.service';

describe('WindowFocusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowFocusService]
    });
  });

  it('should ...', inject([WindowFocusService], (service: WindowFocusService) => {
    expect(service).toBeTruthy();
  }));
});
