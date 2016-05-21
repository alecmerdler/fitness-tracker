"use strict";
/* tslint:disable:no-unused-variable */
var diet_component_1 = require('./diet.component');
var diet_service_1 = require('./diet.service');
// Angular2-specific wrappers for Jasmine functions
var testing_1 = require('@angular/core/testing');
testing_1.describe("DietComponent", function () {
    var component;
    var dietServiceMock;
    testing_1.beforeEach(function () {
        dietServiceMock = new diet_service_1.DietService();
        spyOn(dietServiceMock, "addMeal").and.callThrough();
    });
    testing_1.beforeEach(function () {
        component = new diet_component_1.DietComponent(dietServiceMock);
    });
    testing_1.describe("initialization", function () {
        testing_1.it("should set title to 'Diet Component'", function () {
            testing_1.expect(component.title).toEqual("Diet Component");
        });
    });
    testing_1.describe("addMeal", function () {
        testing_1.it("should call service", function () {
            component.addMeal("tacos", 10, 10, 10);
            testing_1.expect(dietServiceMock.addMeal).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=diet.component.spec.js.map