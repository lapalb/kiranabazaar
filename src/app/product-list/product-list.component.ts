import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  items: Product[] = [];

  constructor(private http: HttpClient) {
    this.http.get('https://fakestoreapi.com/products').subscribe((response) => {
      for (let item of response) {
        this.items.push({
          image: item.image,
          title: item.title,
          price: item.price,
          description: item.description
        });
      }
    });

   }

  ngOnInit(): void {
  }

}
