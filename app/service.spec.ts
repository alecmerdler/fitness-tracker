/* tslint:disable:no-unused-variable */
import { Injector } from '@angular/core';
import { DietService } from './diet.service';

// Angular2-specific wrappers for Jasmine functions
import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  injectAsync
} from '@angular/core/testing';

describe("DietService", () => {
  let service: DietService;

  beforeEachProviders(() => [
    DietService
  ]);

  beforeEach(inject([Injector], (injector: Injector) => {
    service = injector.get(DietService);
  }));


  it("should return title", () => {
    expect(service.getTitle()).toEqual("Diet Service");
  });


});
