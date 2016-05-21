import { Injectable } from '@angular/core';
import { Meal } from './meal.model';

@Injectable()
export class DietService {
	public meal_list: Array<Meal>;

	constructor() {
		this.meal_list = [];
	}


	public addMeal(name: string, protein: number, carbs: number, fat: number) {
		var meal = new Meal(name, protein, carbs, fat);
		this.meal_list.push(meal);

		return meal;
	}



}
