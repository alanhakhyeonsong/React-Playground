import { atom, selector } from 'recoil';
import { Product } from '../types/Product';

export const CartAtom = atom<Product[]>({
  key: 'CartAtom',
  default: [],
});

export const QuantitySelector = selector({
  key: 'QuantitySelector',
  get: ({ get }) => {
    const CurrentItem: Product[] = get(CartAtom);
    return CurrentItem.length.toLocaleString();
  },
});

export const TotalPriceSelector = selector({
  key: 'TotalPriceSelector',
  get: ({ get }) => {
    const CurrentItem: Product[] = get(CartAtom);
    return CurrentItem.reduce(
      (acc, cur) => acc + cur.price, 0
    ).toLocaleString();
  },
});