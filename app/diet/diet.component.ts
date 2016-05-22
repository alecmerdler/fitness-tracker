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
	public new_meal: Meal;
	public is_new: boolean;



	/**************************************************************
	*													Methods
	**************************************************************/

	constructor(private dietService: DietService) {

	}


	ngOnInit() {
		this.title = "Diet Component";
		this.meal_list = this.dietService.getMealList();
		this.new_meal = new Meal(null, null, null, null);
		this.is_new = false;
	}


	public addMeal() {

		let new_meal = this.dietService.addMeal(this.new_meal.name, this.new_meal.protein, this.new_meal.carbs, this.new_meal.fat);

		this.new_meal = new Meal(null, null, null, null);
		this.is_new = false;

		this.meal_list = this.dietService.getMealList();
	}


	public removeMeal(index: number) {
		this.dietService.removeMeal(index);

		this.meal_list = this.dietService.getMealList();
	}
}
