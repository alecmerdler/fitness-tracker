"use strict";
/* tslint:disable:no-unused-variable */
var core_1 = require('@angular/core');
var diet_service_1 = require('./diet.service');
// Angular2-specific wrappers for Jasmine functions
var testing_1 = require('@angular/core/testing');
testing_1.describe("DietService", function () {
    var service;
    testing_1.beforeEachProviders(function () { return [
        diet_service_1.DietService
    ]; });
    testing_1.beforeEach(testing_1.inject([core_1.Injector], function (injector) {
        service = injector.get(diet_service_1.DietService);
    }));
    testing_1.describe("initialization", function () {
        testing_1.it("should initialize the diet data to empty", function () {
            testing_1.expect(service.diet_data.length).toEqual(0);
        });
    });
    testing_1.describe("addMeal", function () {
        testing_1.it("should create a new Meal object and add to diet data array", function () {
            service.addMeal(10, 10, 10);
            testing_1.expect(service.diet_data.length).toEqual(1);
        });
        testing_1.it("should return the created meal", function () {
            var meal = service.addMeal(10, 10, 10);
            testing_1.expect(meal.protein).toEqual(10);
            testing_1.expect(meal.carbs).toEqual(10);
            testing_1.expect(meal.fat).toEqual(10);
        });
    });
});
//# sourceMappingURL=diet.service.spec.js.map