import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() beverage: string = "";
  
  @Output() newBeverageEvent = new EventEmitter<string>();

  beverages: string[] = [];

  ngOnChanges() {
    if (this.beverage) {
      this.beverages.push(this.beverage);
      console.log(this.beverages[1]);
    }
  }



  addNewBeverage(value: string) {
    this.newBeverageEvent.emit(value);
  }

}
