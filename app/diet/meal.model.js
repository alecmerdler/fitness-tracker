"use strict";
var Meal = (function () {
    /**************************************************************
    *													Methods
    **************************************************************/
    function Meal(name, protein, carbs, fat) {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }
    Meal.prototype.calories = function () {
        return (this.protein * 4) + (this.carbs * 4) + (this.fat * 9);
    };
    return Meal;
}());
exports.Meal = Meal;
//# sourceMappingURL=meal.model.js.map