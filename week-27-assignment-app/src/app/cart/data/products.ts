import { Product } from '../../types/Product';

const products: Product[] = [
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

export default products;
