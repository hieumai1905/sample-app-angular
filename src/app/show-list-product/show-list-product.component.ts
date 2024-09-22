import {Component} from '@angular/core';
import {Product} from "../product";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-show-list-product',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './show-list-product.component.html',
  styleUrl: './show-list-product.component.css'
})
export class ShowListProductComponent {
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
}
