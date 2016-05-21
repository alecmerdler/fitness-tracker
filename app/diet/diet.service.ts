import { Injectable } from '@angular/core';
import { Meal } from './meal.model';

@Injectable()
export class DietService {
	public diet_data: Array<Meal>;

	constructor() {
		this.diet_data = [];
	}


	public addMeal(protein: number, carbs: number, fat: number) {
		var meal = new Meal(protein, carbs, fat);
		this.diet_data.push(meal);

		return meal;
	}
}
