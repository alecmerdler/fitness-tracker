export class Meal {
	public protein: number;
	public carbs: number;
	public fat: number;


	constructor(protein: number, carbs: number, fat: number) {
		this.protein = protein;
		this.carbs = carbs;
		this.fat = fat;
	}


	public calories(): number {
		return (this.protein * 4) + (this.carbs * 4) + (this.fat * 9);
	}
}
