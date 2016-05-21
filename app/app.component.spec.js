"use strict";
/* tslint:disable:no-unused-variable */
var app_component_1 = require('./app.component');
// Angular2-specific wrappers for Jasmine functions
var testing_1 = require('@angular/core/testing');
testing_1.describe('AppComponent', function () {
    var component;
    testing_1.beforeEach(function () {
        component = new app_component_1.AppComponent();
    });
    testing_1.describe("ngOnInit", function () {
        testing_1.it("should initialize the title", function () {
            component.ngOnInit();
            testing_1.expect(component.title).toEqual("Fitness Tracker");
        });
    });
});
//# sourceMappingURL=app.component.spec.js.map