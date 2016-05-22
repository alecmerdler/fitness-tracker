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


		it("should set is_new attribute to false", () => {
			component.new_meal = new Meal("tacos", 10, 10, 10);
			component.addMeal();

			expect(component.is_new).toEqual(false);
		});


		it("should retrieve the updated list from service", () => {
			component.new_meal = new Meal("tacos", 10, 10, 10);
			component.addMeal();

			expect(dietServiceMock.getMealList).toHaveBeenCalled();
		});

	});



	describe("removeMeal", () => {

		it("should call service to remove meal at provided index", () => {
			component.removeMeal(0);

			expect(dietServiceMock.removeMeal).toHaveBeenCalled();
		});


		it("should retrieve the updated list from service", () => {
			component.removeMeal(0);

			expect(dietServiceMock.getMealList).toHaveBeenCalled();
		});
	});




});
