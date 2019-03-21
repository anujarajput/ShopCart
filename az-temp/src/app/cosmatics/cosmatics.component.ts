import { Component, OnInit } from '@angular/core';

import { cosmatic_data_check } from "./cosmatic_data_check";
import { cosmatic_data } from "./cosmatic_data";

@Component({
  selector: 'app-cosmatics',
  templateUrl: './cosmatics.component.html',
  styleUrls: ['./cosmatics.component.css']
})
export class CosmaticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  heading = "Product: Cosmatics"

  cosmatics: cosmatic_data_check[] = cosmatic_data;

  calProduct() {
    let sum = 0;
    for (let i of this.cosmatics) {
      sum = sum + i.stock;
    }
    return sum;
  }

}
