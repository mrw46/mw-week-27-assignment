import { CommonModule, NgFor, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { DiscountPipe } from '../discount.pipe';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../types/Product';
import data from './data/products';
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
  private cartService = inject(CartService);

  availableProducts: Product[] = data;

  cartProducts: Product[] = [];

  totalPrice(): number {
    return this.cartService.getTotalPrice(this.cartProducts);
  }

  withDiscount(): number {
    return this.cartService.getTotalWithDiscount(this.cartProducts);
  }

  add(itemName: string) {
    this.cartService.transferItem(
      this.availableProducts,
      this.cartProducts,
      itemName
    );
  }

  remove(itemName: string) {
    this.cartService.transferItem(
      this.cartProducts,
      this.availableProducts,
      itemName
    );
  }
}
