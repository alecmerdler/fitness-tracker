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
			expect(service.diet_data.length).toEqual(0);
		});

	});


	describe("addMeal", () => {

		it("should create a new Meal object and add to diet data array", () => {
			service.addMeal(10, 10, 10);

			expect(service.diet_data.length).toEqual(1);
		});


		it("should return the created meal", () => {
			var meal: Meal = service.addMeal(10, 10, 10);

			expect(meal.protein).toEqual(10);
		});
	});



});
