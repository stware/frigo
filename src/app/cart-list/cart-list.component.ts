import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { products } from '../products';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  productsToBuy: Product[] = [];
  ngOnInit() {
    products.forEach((product) => {
      if (product.quantity < product.minQuantity) {
        this.productsToBuy.push(product);
      }
    });
  }

  buy(product: Product) {
    product.quantity = product.minQuantity;
  }

  canBuy(product: Product): boolean {
    return product.quantity != product.minQuantity;
  }
}
