import {Injectable} from '@angular/core';
import {Product} from "../product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: 1,
      name: 'Apple',
      price: 1000,
      description: 'This is an apple',
      createAt: new Date('2011-10-07')
    },
    {
      id: 2,
      name: 'Banana',
      price: 2000,
      description: 'This is a banana',
      createAt: new Date('2020-01-01')
    },
    {
      id: 3,
      name: 'Orange',
      price: 3000,
      description: 'This is an orange',
      createAt: new Date('2021-01-02')
    },
    {
      id: 4,
      name: 'Grapes',
      price: 2500,
      description: 'This is a bunch of grapes',
      createAt: new Date('2019-05-15')
    },
    {
      id: 5,
      name: 'Pineapple',
      price: 3500,
      description: 'This is a pineapple',
      createAt: new Date('2018-08-20')
    },
    {
      id: 6,
      name: 'Strawberry',
      price: 4000,
      description: 'This is a strawberry',
      createAt: new Date('2022-03-10')
    },
    {
      id: 7,
      name: 'Mango',
      price: 4500,
      description: 'This is a mango',
      createAt: new Date('2017-07-04')
    },
    {
      id: 8,
      name: 'Peach',
      price: 3000,
      description: 'This is a peach',
      createAt: new Date('2021-12-12')
    },
    {
      id: 9,
      name: 'Watermelon',
      price: 5000,
      description: 'This is a watermelon',
      createAt: new Date('2023-06-01')
    },
    {
      id: 10,
      name: 'Cherry',
      price: 6000,
      description: 'This is a cherry',
      createAt: new Date('2022-11-11')
    },
    {
      id: 11,
      name: 'Lemon',
      price: 1200,
      description: 'This is a lemon',
      createAt: new Date('2020-02-02')
    },
    {
      id: 12,
      name: 'Blueberry',
      price: 2500,
      description: 'This is a blueberry',
      createAt: new Date('2019-09-09')
    }
  ];

  constructor() {
  }

  getAll(): Array<Product> {
    return this.products;
  }
}
