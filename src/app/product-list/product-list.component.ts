import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
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
  @Output() notify = new EventEmitter<any>();
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

  takeOne(p: Product) {
    let product = this.productsByCategory.find(
      (product) => product.id === p.id
    );
    if (product != undefined) {
      product.quantity = product.quantity - 1;
      this.notify.emit({ product: p });
    }
  }

  canTake(product: Product): boolean {
    return product.quantity > 0;
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
