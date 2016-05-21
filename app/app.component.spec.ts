/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { provide } from '@angular/core';
import { DietService } from './diet/diet.service';

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
	let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });


	describe("ngOnInit", () => {

		it("should initialize the title", () => {
			component.ngOnInit();

			expect(component.title).toEqual("Fitness Tracker");
		});
	});



});
