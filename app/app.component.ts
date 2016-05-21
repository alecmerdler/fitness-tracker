import { Component } from '@angular/core';
import { DietService } from './diet/diet.service';

@Component({
    selector: 'app',
    template: '<h1>Fitness Tracker</h1>',
    providers: [DietService],
})
export class AppComponent {

	/**************************************************************
	*													Attributes
	**************************************************************/

  private title: string = "Fitness Tracker";


	/**************************************************************
	*													Methods
	**************************************************************/

  constructor() { }
}
