import { Meal } from './meal.model';

describe("Model: Meal", () => {

	it("should initialize using arguments when given", () => {
		var meal: Meal = new Meal("Tacos", 20, 20, 10);

		expect(meal.protein).toEqual(20);
		expect(meal.carbs).toEqual(20);
		expect(meal.fat).toEqual(10);
	});


	it("should return total calories", () => {
		var meal: Meal = new Meal("Tacos", 20, 20, 10);

		expect(meal.calories()).toEqual(250);
	});

});
