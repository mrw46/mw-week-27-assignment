import { Injectable } from '@angular/core';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  sumItemsFromArray(array: any[], mapFunction: (item: any) => number) {
    return array.map(mapFunction).reduce((acc, val) => acc + val, 0);
  }

  getPrice(product: Product) {
    return product.price * product.quantity;
  }

  applyDiscount(product: Product) {
    const priceWithDiscount = product.discounted
      ? product.price * (1 - product.percentDiscount / 100)
      : product.price;
    return priceWithDiscount * product.quantity;
  }

  getTotalPrice(products: Product[]) {
    return this.sumItemsFromArray(products, this.getPrice);
  }

  getTotalWithDiscount(products: Product[]) {
    return this.sumItemsFromArray(products, this.applyDiscount);
  }

  transferItem(origin: any[], target: any[], name: string) {
    const itemToTransfer = origin.find((item) => item.name === name);
    origin.splice(origin.indexOf(itemToTransfer), 1);
    target.push(itemToTransfer);
  }
}
