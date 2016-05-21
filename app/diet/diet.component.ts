import { Component } from '@angular/core';
import { DietService } from './diet.service';

@Component({
	providers: [DietService]
})
export class DietComponent {

	/**************************************************************
	*													Attributes
	**************************************************************/

	public title: string;



	/**************************************************************
	*													Methods
	**************************************************************/

	constructor(private dietService: DietService) {
		this.title = "Diet Component";
	}


	public addMeal(name: string, protein: number, carbs: number, fat: number) {
		this.dietService.addMeal(name, protein, carbs, fat);
	}
}
