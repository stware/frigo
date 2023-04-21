export interface Product {
  id: number;
  name: string;
  category: number;
  description: string;
}

export const products = [
  {
    id: 1,
    category: 1,
    name: 'Zucchine',
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    category: 2,
    name: 'Asiago',
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    category: 3,
    name: 'Prosciutto crudo',
    description: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
