/* tslint:disable:no-unused-variable */
import { DietComponent } from './diet.component';
import { provide } from '@angular/core';


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


describe("DietComponent", () => {
	this.component;

	beforeEach(() => {
		this.component = new DietComponent();
	});


	describe("initialization", () => {

		it("should set title to 'Diet Component'", () => {
			expect(this.component.title).toEqual("Diet Component");
		});
	});
});
