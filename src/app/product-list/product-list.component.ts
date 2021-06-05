import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  items = [];

  constructor() {
    this.items[0] = {
      imageURL: 'https://lapalb.github.io/img/ash.jpg',
      heading: 'Apple',
      content: 'This is Apple'
    };
   }

  ngOnInit(): void {
  }

}
