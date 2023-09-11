import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  currentBeverage = "";

  sendChild(value: string)
  {
    this.currentBeverage = value;
  }

  beverages : string[] = [];

  addBeverage(newBeverage : string)
  {
    this.beverages.push(newBeverage);
  }
 
}
