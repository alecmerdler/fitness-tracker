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
var diet_service_1 = require('./diet.service');
var DietComponent = (function () {
    /**************************************************************
    *													Methods
    **************************************************************/
    function DietComponent(dietService) {
        this.dietService = dietService;
        this.title = "Diet Component";
    }
    DietComponent.prototype.addMeal = function (name, protein, carbs, fat) {
        this.dietService.addMeal(name, protein, carbs, fat);
    };
    DietComponent = __decorate([
        core_1.Component({
            providers: [diet_service_1.DietService]
        }), 
        __metadata('design:paramtypes', [diet_service_1.DietService])
    ], DietComponent);
    return DietComponent;
}());
exports.DietComponent = DietComponent;
//# sourceMappingURL=diet.component.js.map