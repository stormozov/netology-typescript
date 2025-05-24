import IBuyable from '../../interfaces/IBuyable';

/**
 * Класс `Cart` представляет собой корзину для покупок.
 * 
 * ### Методы:
 * - `add(item: IBuyable): void` добавляет товар в корзину.
 * - `get items(): IBuyable[]` возвращает копию массива товаров.
 *
 * ### Пример использования:
 * ```javascript
 * const cart = new Cart();
 * const item1 = { name: 'Product A', price: 100 };
 * const item2 = { name: 'Product B', price: 150 };
 *
 * cart.add(item1);
 * cart.add(item2);
 *
 * console.log(cart.items); // Вывод: [item1, item2]
 * ```
 */
export default class Cart {
  private _items: IBuyable[] = [];

  add(item: IBuyable): void {
    this._items.push(item);
  }

  get items(): IBuyable[] {
    return [...this._items]; 
  }
}
