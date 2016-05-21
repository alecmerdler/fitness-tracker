/* tslint:disable:no-unused-variable */
import { Injector } from '@angular/core';
import { DietService } from './diet.service';
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

describe("DietService", () => {
  let service: DietService;

  beforeEachProviders(() => [
    DietService
  ]);

  beforeEach(inject([Injector], (injector: Injector) => {
    service = injector.get(DietService);
  }));



	describe("initialization", () => {

		it("should initialize the diet data to empty", () => {
			expect(service.meal_list.length).toEqual(0);
		});

	});



	describe("getMealList", () => {

		it("should return the meal list", () => {
			var result = service.getMealList();

			expect(result).toBeDefined();
		});
	});



	describe("addMeal", () => {

		it("should create a new Meal object and add to diet data array", () => {
			service.addMeal("Tacos", 10, 10, 10);

			expect(service.meal_list.length).toEqual(1);
		});


		it("should return the created meal", () => {
			var meal: Meal = service.addMeal("Tacos", 10, 10, 10);

			expect(meal.name).toEqual("Tacos");
			expect(meal.protein).toEqual(10);
			expect(meal.carbs).toEqual(10);
			expect(meal.fat).toEqual(10);
		});

	});



	describe("removeMeal", () => {

		it("should remove the last meal entered", () => {
			let taco: Meal = new Meal("Tacos", 10, 10, 10);
			let carnitas: Meal = new Meal("Carnitas", 20, 20, 20);
			service.meal_list = [taco, carnitas];
			service.removeMeal();

			expect(service.meal_list.length).toEqual(1);
			expect(service.meal_list[0]).toEqual(taco);
		});
	});



	describe("totalCalories", () => {

		// Attempt at random unit testing
		it("should return the sum of all meal calories in meal list", () => {
			let expected_calories: number = 0;
			let num_tests: number = Math.floor(Math.random() * (25));

			for (let i: number = 0; i < num_tests; i++) {
				let protein: number = Math.floor(Math.random() * (1000));
				let carbs: number = Math.floor(Math.random() * (1000));
				let fat: number = Math.floor(Math.random() * (1000));

				service.meal_list.push(new Meal("tacos" + [i], protein, carbs, fat));
				expected_calories += (protein * 4) + (carbs * 4) + (fat * 9);
			}

			expect(service.totalCalories()).toEqual(expected_calories);
		});
	});



});
