import {Component} from '@angular/core';
import {Product} from "../product";
import {DatePipe, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-show-list-product',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    DatePipe
  ],
  templateUrl: './show-list-product.component.html',
  styleUrl: './show-list-product.component.css'
})
export class ShowListProductComponent {
  product: Product = {};
  products: Product[] = [
    {
      name: 'Apple',
      price: 1000,
      description: 'This is an apple',
      createAt: new Date('2011-10-07')
    },
    {
      name: 'Banana',
      price: 2000,
      description: 'This is a banana',
      createAt: new Date('2020-01-01')
    },
    {
      name: 'Orange',
      price: 3000,
      description: 'This is an orange',
      createAt: new Date('2021-01-02')
    }
  ]

  addProduct() {
    this.products.push(this.product);
    this.product = {};
  }
}
