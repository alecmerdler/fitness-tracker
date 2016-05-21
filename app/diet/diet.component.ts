import { Component, OnInit } from '@angular/core';
import { DietService } from './diet.service';
import { Meal } from './meal.model';

@Component({
	selector: 'diet-component',
	templateUrl: "/app/diet/diet.component.html",
	providers: [DietService]
})
export class DietComponent implements OnInit {

	/**************************************************************
	*													Attributes
	**************************************************************/

	public title: string;
	public meal_list: Array<Meal>;



	/**************************************************************
	*													Methods
	**************************************************************/

	constructor(private dietService: DietService) {

	}


	ngOnInit() {
		this.title = "Diet Component";
		this.meal_list = this.dietService.getMealList();
	}


	public addMeal(name: string, protein: number, carbs: number, fat: number) {
		let new_meal = this.dietService.addMeal(name, protein, carbs, fat);

		return new_meal;
	}


	public removeMeal() {
		this.dietService.removeMeal();
	}
}
