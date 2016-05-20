/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';

// Angular2-specific wrappers for Jasmine functions
import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  injectAsync
} from '@angular/core/testing';

describe('AppComponent', () => {

  beforeEach(() => {
    this.component = new AppComponent();
  });


  it("should initialize title to 'Fitness Tracker'", () => {
    expect(this.component.title).toEqual("Fitness Tracker");
  });


});



