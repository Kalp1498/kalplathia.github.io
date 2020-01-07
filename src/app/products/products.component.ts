import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [
    {id: 1, name: "BMW"},
    {id: 2, name: "AUDI"},
    {id: 3, name: "MERCEDES"},
    {id: 4, name: "LAMBORGHINI"},
    {id: 5, name: "SKODA"},
    {id: 6, name: "MITSHUBISHI"},
    {id: 7, name: "FERRARI"},
    {id: 8, name: "ALFA ROMEO"},
    {id: 9, name: "BENTLEY"},
    {id: 10, name: "CADILLAC"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
