import { Component, OnInit } from '@angular/core';

import { mobpart_datacheck } from "./mobpart_datacheck";
import { mobpart_data } from "./mobpart_data";

@Component({
  selector: 'app-mob-part',
  templateUrl: './mob-part.component.html',
  styleUrls: ['./mob-part.component.css']
})
export class MobPartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mobparts = mobpart_data;
  }

  heading = "Product:Mobile"

  mobparts: mobpart_datacheck[];


  calProduct() {
    let sum = 0;
    for (let i of this.mobparts) {
      sum = sum + i.stock;
    }
    return sum;
  }

}
