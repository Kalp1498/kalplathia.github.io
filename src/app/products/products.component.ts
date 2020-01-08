import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

interface iProducts {
  id: number;
  name: string;
  price: number
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {

  @Input() num1: number;
  
  i = 0;
  isValid: boolean = true;

  products: iProducts[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propertyName in changes) {
      let change =  changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log('Previous : ' + previous + 'Current : ' + current);
      this.i += 1;
      if (this.i > 1) {
        this.isValid = false;
      }
      
    }
  }

  ngOnInit() {
    this.products = [
      {id: 1, name: "BMW", price: 10000},
      {id: 2, name: "AUDI", price: 20000},
      {id: 3, name: "MERCEDES", price: 30000},
      {id: 4, name: "LAMBORGHINI", price: 40000},
      {id: 5, name: "SKODA", price: 50000},
      {id: 6, name: "MITSHUBISHI", price: 60000},
      {id: 7, name: "FERRARI", price: 70000},
      {id: 8, name: "ALFA ROMEO", price: 80000},
      {id: 9, name: "BENTLEY", price: 90000},
      {id: 10, name: "CADILLAC", price: 100000},
    ]
  }

}
