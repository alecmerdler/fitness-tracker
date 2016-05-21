export class Meal {

	/**************************************************************
	*													Attributes
	**************************************************************/

	public name: string;
	public protein: number;
	public carbs: number;
	public fat: number;



	/**************************************************************
	*													Methods
	**************************************************************/

	constructor(name: string, protein: number, carbs: number, fat: number) {
		this.name = name;
		this.protein = protein;
		this.carbs = carbs;
		this.fat = fat;
	}


	public calories(): number {
		return (this.protein * 4) + (this.carbs * 4) + (this.fat * 9);
	}
}
