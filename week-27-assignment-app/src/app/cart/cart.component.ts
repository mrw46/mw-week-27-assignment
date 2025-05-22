import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

interface Product {
  name: string;
  price: number;
  discounted: boolean;
}

@Component({
  selector: 'app-cart',
  imports: [NgFor, HighlightDirective],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  products: Product[] = [
    { name: 'product1', price: 1, discounted: true },
    { name: 'product2', price: 2, discounted: false },
    { name: 'product3', price: 3, discounted: true },
    { name: 'product4', price: 4, discounted: false },
    { name: 'product5', price: 5, discounted: false },
  ];
}
