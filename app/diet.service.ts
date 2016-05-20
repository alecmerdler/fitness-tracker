import { Injectable } from '@angular/core';

@Injectable()
export class DietService {
  private title: string = "Diet Service";

  public getTitle(): string {
    return this.title;
  }
}