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
  injectAsync,
} from '@angular/core/testing';


describe("DietComponent", () => {
	let component: DietComponent;
	let dietServiceMock: DietService;


	// Mock service instance
	class DietServiceMock extends DietService {

	}

	beforeEach(() => {
		dietServiceMock = new DietServiceMock();
		component = new DietComponent(dietServiceMock);

		spyOn(dietServiceMock, "getMealList").and.callThrough();
		spyOn(dietServiceMock, "addMeal").and.callThrough();
		spyOn(dietServiceMock, "removeMeal").and.callThrough();
	});



	describe("ngOnInit", () => {

		it("should initialize attributes", () => {
			component.ngOnInit();

			expect(component.title).toEqual("Diet Component");
			expect(component.meal_list).toBeDefined();
		});


		it("should call service to initialize meal list", () => {
			component.ngOnInit();

			expect(dietServiceMock.getMealList).toHaveBeenCalled();
		});
	});



	describe("addMeal", () => {

		it("should not call service if fields are blank", () => {
			component.new_meal = new Meal(null, null, null, null);
			component.addMeal();

			expect(dietServiceMock.addMeal).not.toHaveBeenCalled();
		});
		

		it("should call service to add meal", () => {
			component.new_meal = new Meal("tacos", 10, 10, 10);
			component.addMeal();

			expect(dietServiceMock.addMeal).toHaveBeenCalled();
		});


		it("should reset new meal attribute", () => {
			component.new_meal = new Meal("tacos", 10, 10, 10);
			component.addMeal();

			expect(component.new_meal.name).toEqual(null);
			expect(component.new_meal.protein).toEqual(null);
			expect(component.new_meal.carbs).toEqual(null);
			expect(component.new_meal.fat).toEqual(null);
		});
	});



	describe("removeMeal", () => {

		it("should call service to remove last meal", () => {
			component.removeMeal();

			expect(dietServiceMock.removeMeal).toHaveBeenCalled();
		});
	});




});
