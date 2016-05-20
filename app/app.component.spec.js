"use strict";
var _this = this;
/* tslint:disable:no-unused-variable */
var app_component_1 = require('./app.component');
var core_1 = require('@angular/core');
var diet_service_1 = require('./diet.service');
// Angular2-specific wrappers for Jasmine functions
var testing_1 = require('@angular/core/testing');
testing_1.describe('AppComponent', function () {
    testing_1.beforeEach(function () {
        _this.component = new app_component_1.AppComponent();
    });
    testing_1.beforeEachProviders(function () { return []; }, core_1.provide(diet_service_1.DietService, { useClass: diet_service_1.DietService }));
});
testing_1.it("should initialize title to 'Fitness Tracker'", function () {
    testing_1.expect(_this.component.title).toEqual("Fitness Tracker");
});
testing_1.it("should retrieve title from service", function () {
    testing_1.expect(_this.component.retrieveTitle()).toEqual("Diet Service");
});
;
//# sourceMappingURL=app.component.spec.js.map