"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* tslint:disable:no-unused-variable */
var diet_component_1 = require('./diet.component');
var diet_service_1 = require('./diet.service');
var meal_model_1 = require('./meal.model');
// Angular2-specific wrappers for Jasmine functions
var testing_1 = require('@angular/core/testing');
testing_1.describe("DietComponent", function () {
    var component;
    var dietServiceMock;
    // Mock service instance
    var DietServiceMock = (function (_super) {
        __extends(DietServiceMock, _super);
        function DietServiceMock() {
            _super.apply(this, arguments);
        }
        return DietServiceMock;
    }(diet_service_1.DietService));
    testing_1.beforeEach(function () {
        dietServiceMock = new DietServiceMock();
        component = new diet_component_1.DietComponent(dietServiceMock);
        spyOn(dietServiceMock, "getMealList").and.callThrough();
        spyOn(dietServiceMock, "addMeal").and.callThrough();
        spyOn(dietServiceMock, "removeMeal").and.callThrough();
    });
    testing_1.describe("ngOnInit", function () {
        testing_1.it("should initialize attributes", function () {
            component.ngOnInit();
            testing_1.expect(component.title).toEqual("Diet Component");
            testing_1.expect(component.meal_list).toBeDefined();
        });
        testing_1.it("should call service to initialize meal list", function () {
            component.ngOnInit();
            testing_1.expect(dietServiceMock.getMealList).toHaveBeenCalled();
        });
    });
    testing_1.describe("addMeal", function () {
        testing_1.it("should not call service if fields are blank", function () {
            component.new_meal = new meal_model_1.Meal(null, null, null, null);
            component.addMeal();
            testing_1.expect(dietServiceMock.addMeal).not.toHaveBeenCalled();
        });
        testing_1.it("should call service to add meal", function () {
            component.new_meal = new meal_model_1.Meal("tacos", 10, 10, 10);
            component.addMeal();
            testing_1.expect(dietServiceMock.addMeal).toHaveBeenCalled();
        });
        testing_1.it("should reset new meal attribute", function () {
            component.new_meal = new meal_model_1.Meal("tacos", 10, 10, 10);
            component.addMeal();
            testing_1.expect(component.new_meal.name).toEqual(null);
            testing_1.expect(component.new_meal.protein).toEqual(null);
            testing_1.expect(component.new_meal.carbs).toEqual(null);
            testing_1.expect(component.new_meal.fat).toEqual(null);
        });
    });
    testing_1.describe("removeMeal", function () {
        testing_1.it("should call service to remove last meal", function () {
            component.removeMeal();
            testing_1.expect(dietServiceMock.removeMeal).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=diet.component.spec.js.map