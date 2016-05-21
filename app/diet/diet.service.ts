import { Injectable } from '@angular/core';
import { Meal } from './meal.model';

@Injectable()
export class DietService {

	/**************************************************************
	*													Attributes
	**************************************************************/

	public meal_list: Array<Meal>;



	/**************************************************************
	*													Methods
	**************************************************************/

	constructor() {
		// this.meal_list = [new Meal("tacos", 10, 10, 10)];
		this.meal_list = [];
	}


	public getMealList(): Array<Meal> {
		return this.meal_list;
	}


	public addMeal(name: string, protein: number, carbs: number, fat: number): Meal {
		var meal = new Meal(name, protein, carbs, fat);
		this.meal_list.push(meal);

		return meal;
	}


	public removeMeal() {
		this.meal_list.splice(this.meal_list.length - 1, 1);
	}


	public totalCalories(): number {
		let total_calories = 0;

		this.meal_list.forEach((meal: Meal) => {
			total_calories += meal.calories();
		});

		return total_calories;
	}



}
