import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../categories/categories';

import { products } from '../products';
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() category!: Category;
  products = products;

  productsByCategory: Product[] = [];

  ngOnInit() {
    // First get the product id from the current route.
    //const routeParams = this.route.snapshot.paramMap;
    //const productIdFromRoute = Number(routeParams.get('productId'));
    // Find the product that correspond with the id provided in route.
    this.productsByCategory = products.filter(
      (product) => product.category === this.category.id
    );
  }

  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
