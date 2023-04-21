export interface Product {
  id: number;
  name: string;
  category: number;
  quantity: number;
  minQuantity: number;
  description: string;
}

export var products = [
  {
    id: 1,
    category: 1,
    name: 'Zucchine',
    description: '',
    quantity: 0,
    minQuantity: 2,
  },
  {
    id: 2,
    category: 1,
    name: 'Carote',
    description: '',
    quantity: 0,
    minQuantity: 2,
  },
  {
    id: 3,
    category: 2,
    name: 'Asiago',
    description: 'A great phone with one of the best cameras',
    quantity: 0,
    minQuantity: 2,
  },
  {
    id: 4,
    category: 3,
    name: 'Prosciutto crudo',
    description: '',
    quantity: 0,
    minQuantity: 2,
  },
  {
    id: 5,
    category: 4,
    name: 'Kinder bueno white',
    description: '',
    quantity: 0,
    minQuantity: 3,
  },
  {
    id: 6,
    category: 2,
    name: 'Galbanino 800gr',
    description: '',
    quantity: 0,
    minQuantity: 3,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
