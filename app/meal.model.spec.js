"use strict";
var meal_model_1 = require('./meal.model');
describe("Model: Meal", function () {
    it("should initialize using arguments when given", function () {
        var meal = new meal_model_1.Meal(20, 20, 10);
        expect(meal.protein).toEqual(20);
        expect(meal.carbs).toEqual(20);
        expect(meal.fat).toEqual(10);
    });
    it("should return total calories", function () {
        var meal = new meal_model_1.Meal(20, 20, 10);
        expect(meal.calories()).toEqual(250);
    });
});
//# sourceMappingURL=meal.model.spec.js.map