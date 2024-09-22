import {Component} from '@angular/core';
import {Product} from "../product";
import {DatePipe, NgForOf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-show-list-product',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    DatePipe,
    UpperCasePipe
  ],
  templateUrl: './show-list-product.component.html',
  styleUrl: './show-list-product.component.css'
})
export class ShowListProductComponent {
  product: Product = {};
  products: Product[] = [];

  ngOnInit() {
    console.log("Get all products");
    this.products = this.productService.getAll();
  }

  addProduct() {
    this.products.push(this.product);
    this.product = {};
  }

  constructor(private productService: ProductService) {

  }
}
