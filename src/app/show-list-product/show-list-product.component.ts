import {Component} from '@angular/core';
import {Product} from "../product";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-show-list-product',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
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
      description: 'This is an apple'
    },
    {
      name: 'Banana',
      price: 2000,
      description: 'This is a banana'
    },
    {
      name: 'Orange',
      price: 3000,
      description: 'This is an orange'
    }
  ]

  addProduct() {
    this.products.push(this.product);
    this.product = {};
  }
}
