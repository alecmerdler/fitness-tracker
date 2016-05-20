"use strict";
var _this = this;
/* tslint:disable:no-unused-variable */
var diet_component_1 = require('./diet.component');
// Angular2-specific wrappers for Jasmine functions
var testing_1 = require('@angular/core/testing');
testing_1.describe("DietComponent", function () {
    _this.component;
    testing_1.beforeEach(function () {
        _this.component = new diet_component_1.DietComponent();
    });
    testing_1.describe("initialization", function () {
        testing_1.it("should set title to 'Diet Component'", function () {
            testing_1.expect(_this.component.title).toEqual("Diet Component");
        });
    });
});
//# sourceMappingURL=diet.component.spec.js.map