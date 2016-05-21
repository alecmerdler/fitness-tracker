"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var meal_model_1 = require('./meal.model');
var DietService = (function () {
    function DietService() {
        this.meal_list = [];
    }
    DietService.prototype.getMealList = function () {
        return this.meal_list;
    };
    DietService.prototype.addMeal = function (name, protein, carbs, fat) {
        var meal = new meal_model_1.Meal(name, protein, carbs, fat);
        this.meal_list.push(meal);
        return meal;
    };
    DietService.prototype.removeMeal = function () {
        this.meal_list.splice(this.meal_list.length - 1, 1);
    };
    DietService.prototype.totalCalories = function () {
        var total_calories = 0;
        this.meal_list.forEach(function (meal) {
            total_calories += meal.calories();
        });
        return total_calories;
    };
    DietService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DietService);
    return DietService;
}());
exports.DietService = DietService;
//# sourceMappingURL=diet.service.js.map