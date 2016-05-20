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

describe('AppComponent', () => {
	this.component;

  beforeEach(() => {
    this.component = new AppComponent(new DietService());
  });


  it("should initialize title to 'Fitness Tracker'", () => {
    expect(this.component.title).toEqual("Fitness Tracker");
  });


	it("should retrieve title from service method", () => {
		expect(this.component.retrieveTitle()).toEqual("Diet Service");
	});




});
