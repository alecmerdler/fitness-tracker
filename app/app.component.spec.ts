/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { provide } from '@angular/core';
import { DietService } from './diet.service';

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

// Mock service
class MockDietService extends DietService {

	getTitle() {
		return "Diet Service";
	}
}


describe('AppComponent', () => {
	this.component;

  beforeEach(() => {
    this.component = new AppComponent();
  });


  it("should initialize title to 'Fitness Tracker'", () => {
    expect(this.component.title).toEqual("Fitness Tracker");
  });

});
