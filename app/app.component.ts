import { Component } from '@angular/core';
import { DietService } from './diet/diet.service';
import { DietComponent } from './diet/diet.component';

@Component({
    selector: 'app',
    templateUrl: '/app/app.component.html',
    providers: [DietService],
		directives: [DietComponent],
})
export class AppComponent {

	/**************************************************************
	*													Attributes
	**************************************************************/

  public title: string;


	/**************************************************************
	*													Methods
	**************************************************************/

  constructor() {

	}


	ngOnInit() {
		this.title = "Fitness Tracker";
	}
}
