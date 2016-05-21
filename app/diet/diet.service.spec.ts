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



	describe("addMeal", () => {

		it("should create a new Meal object and add to diet data array", () => {
			service.addMeal("Tacos", 10, 10, 10);

			expect(service.meal_list.length).toEqual(1);
		});


		it("should return the created meal", () => {
			var meal: Meal = service.addMeal("Tacos", 10, 10, 10);

			expect(meal.protein).toEqual(10);
			expect(meal.carbs).toEqual(10);
			expect(meal.fat).toEqual(10);
		});

	});



	describe("removeMeal", () => {

		it("should remove the last meal entered", () => {
			service.meal_list = [new Meal("Tacos", 10, 10, 10), new Meal("Carnitas", 20, 20, 20)];
		});
	});



});
