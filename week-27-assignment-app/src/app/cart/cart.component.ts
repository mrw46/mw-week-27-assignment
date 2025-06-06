import { CommonModule, NgFor, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { DiscountPipe } from '../discount.pipe';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  price: number;
  quantity: number;
  discounted: boolean;
  percentDiscount: number;
}

@Component({
  selector: 'app-cart',
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    HighlightDirective,
    CurrencyPipe,
    DiscountPipe,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  products: Product[] = [
    {
      name: 'Keyboard',
      price: 40,
      quantity: 1,
      discounted: true,
      percentDiscount: 20,
    },
    {
      name: 'Mouse',
      price: 25,
      quantity: 1,
      discounted: false,
      percentDiscount: 0,
    },
    {
      name: 'Monitor',
      price: 120,
      quantity: 1,
      discounted: true,
      percentDiscount: 15,
    },
    {
      name: 'USB Hub',
      price: 15.99,
      quantity: 1,
      discounted: false,
      percentDiscount: 20,
    },
    {
      name: 'Extension Lead',
      price: 7.99,
      quantity: 1,
      discounted: false,
      percentDiscount: 0,
    },
  ];

  calculateTotal(mapFunction: (product: Product) => number) {
    return this.products.map(mapFunction).reduce((acc, val) => acc + val, 0);
  }

  applyDiscount(product: Product) {
    return product.discounted
      ? product.price * (1 - product.percentDiscount / 100)
      : product.price;
  }

  totalPrice = this.calculateTotal((product) => product.price);

  withDiscount = this.calculateTotal(this.applyDiscount);

  quantityChange() {
    this.totalPrice = this.calculateTotal(
      (product) => product.price * product.quantity
    );

    this.withDiscount = this.calculateTotal(
      (product) => this.applyDiscount(product) * product.quantity
    );
  }
}
