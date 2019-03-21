import { Component, OnInit } from '@angular/core';

import { laptop_data_check } from "./laptop_datacheck"
import { laptop_data } from "./latop_data";

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.laptop = laptop_data;

  }

  heading = "Product: Laptop"

  laptop: laptop_data_check[];

  calProduct() {
    let sum = 0;
    for (let i of this.laptop) {
      sum = sum + i.stock;
    }
    return sum;
  }

}


