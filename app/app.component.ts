import { Component } from '@angular/core';
import { DietService } from './diet.service';

@Component({
    selector: 'app',
    template: '<h1>Fitness Tracker</h1>',
    providers: [DietService],
})
export class AppComponent {
  private title: string = "Fitness Tracker";

  constructor(private dietService: DietService) {

  }

  public retrieveTitle(): string {
    return this.dietService.getTitle();
  }
}
