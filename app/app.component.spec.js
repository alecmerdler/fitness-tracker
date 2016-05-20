"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _this = this;
/* tslint:disable:no-unused-variable */
var app_component_1 = require('./app.component');
var diet_service_1 = require('./diet.service');
// Angular2-specific wrappers for Jasmine functions
var testing_1 = require('@angular/core/testing');
// Mock service
var MockDietService = (function (_super) {
    __extends(MockDietService, _super);
    function MockDietService() {
        _super.apply(this, arguments);
    }
    MockDietService.prototype.getTitle = function () {
        return "Diet Service";
    };
    return MockDietService;
}(diet_service_1.DietService));
testing_1.describe('AppComponent', function () {
    _this.component;
    testing_1.beforeEach(function () {
        _this.component = new app_component_1.AppComponent(new MockDietService());
    });
    testing_1.it("should initialize title to 'Fitness Tracker'", function () {
        testing_1.expect(_this.component.title).toEqual("Fitness Tracker");
    });
});
//# sourceMappingURL=app.component.spec.js.map