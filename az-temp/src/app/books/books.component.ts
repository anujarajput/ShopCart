import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  heading = "Product: Books"

  books = [
    {
      name: "Untouchable",
      auther: "Raj Anand",
      price: 300,
      stock: 12
    },
    {
      name: "Jaya",
      auther: "Devdutt Pattanaik",
      price: 450,
      stock: 4
    },
    {
      name: "English",
      auther: "Upany Chatterjee",
      price: 630,
      stock: 7
    },
    {
      name: "White Tiger",
      auther: "Arvind Adiga",
      price: 120,
      stock: 23
    },
    {
      name: "The place of Illusion",
      auther: "Chitra Banarjee",
      price: 1200,
      stock: 0
    },
    {
      name: "You before Me",
      auther: "Jojo Mayose",
      price: 360,
      stock: 5
    },
    {
      name: "Half Girlfriend",
      auther: "Chetan Bhagat",
      price: 120,
      stock: 10
    },
  ]

  calProduct() {
    let sum = 0;
    for (let i of this.books) {
      sum = sum + i.stock;
    }
    return sum;
  }

}
