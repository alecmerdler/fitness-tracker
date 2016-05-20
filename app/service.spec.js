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
    testing_1.it("should return title", function () {
        testing_1.expect(service.getTitle()).toEqual("Diet Service");
    });
});
//# sourceMappingURL=service.spec.js.map