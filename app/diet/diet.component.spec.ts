/* tslint:disable:no-unused-variable */
import { DietComponent } from './diet.component';
import { DietService } from './diet.service';
import { provide } from '@angular/core';
import { Meal } from './meal.model';


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
	let component: DietComponent;
	let dietServiceMock: DietService;


	beforeEach(() => {
		dietServiceMock = new DietService();

		spyOn(dietServiceMock, "addMeal").and.callThrough();
	});

	beforeEach(() => {
		component = new DietComponent(dietServiceMock);
	});


	describe("initialization", () => {

		it("should set title to 'Diet Component'", () => {
			expect(component.title).toEqual("Diet Component");
		});
	});



	describe("addMeal", () => {

		it("should call service", () => {
			component.addMeal("tacos", 10, 10, 10);

			expect(dietServiceMock.addMeal).toHaveBeenCalled();
		});
	});




});
