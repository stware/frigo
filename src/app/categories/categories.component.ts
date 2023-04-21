import { Component } from '@angular/core';
import { Product } from '../products';
import { categories } from './categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categories = categories;

  onNotify($event: any) {
    window.alert(
      'Taken product ' +
        $event.product.name +
        ' remaining ' +
        $event.product.quantity
    );
  }
}
