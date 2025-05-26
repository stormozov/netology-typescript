import IBuyable from '../../interfaces/IBuyable';
import ICartItem from '../../interfaces/ICartItem';

/**
 * Класс `Cart` представляет собой корзину для покупок.
 * 
 * ### Методы:
 * - `add(item: IBuyable): void` добавляет товар в корзину.
 * - `get items(): IBuyable[]` возвращает копию массива товаров.
 * - `getTotalPrice(): number` возвращает общую стоимость товаров в корзине 
 * без учета скидок.
 * - `getTotalPriceWithDiscount(discount: number): number` возвращает общую 
 * стоимость товаров в корзине с учетом скидки.
 *
 * ### Пример использования:
 * ```javascript
 * const cart = new Cart();
 * 
 * const item1 = { id: 1, name: 'Product A', price: 100, isSingleInstance: true };
 * const item2 = { id: 2, name: 'Product B', price: 150, isSingleInstance: false };
 *
 * cart.add(item1);
 * cart.add(item2);
 *
 * console.log(cart.items); // Вывод: [ item1, item2 ]
 * ```
 */
export default class Cart {
  private _items: ICartItem[] = [];

  /**
   * Возвращает копию массива товаров в корзине.
   * 
   * ### Пример использования:
   * ```javascript
   * const cart = new Cart();
   * 
   * const item1 = { name: 'Product A', price: 100 };
   * const item2 = { name: 'Product B', price: 150 };
   * 
   * cart.add(item1);
   * cart.add(item2);
   * 
   * console.log(cart.items); // Вывод: [ item1, item2 ]
   * ```
   */
  get items(): ICartItem[] {
    return [...this._items]; 
  }

  /**
   * Добавляет товар в корзину.
   * 
   * Если товар уже есть в корзине и его можно добавить в корзину более одного раза, 
   * то его количество увеличивается.
   * 
   * ### Параметры:
   * @param {IBuyable} item - Товар, который нужно добавить в корзину.
   * 
   * ### Пример использования:
   * ```javascript
   * const cart = new Cart();
   * 
   * const item1 = { name: 'Product A', price: 100 };
   * const item2 = { name: 'Product B', price: 150 };
   * 
   * cart.add(item1);
   * cart.add(item2);
   * 
   * console.log(cart.items); // Вывод: [ item1, item2 ]
   * ```
   */
  add(item: IBuyable): void {
    const existingItem = this._items.find((cartItem) => cartItem.product.id === item.id);
    
    if (item.isSingleInstance) {
      if (!existingItem) {
        this._items.push({ product: item, quantity: 1 });
      }
    } else {
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this._items.push({ product: item, quantity: 1 });
      }
    }
  }

  /**
   * Увеличивает количество товара на один в корзине.
   * 
   * ### Параметры:
   * @param {number} id - Идентификатор товара, которому нужно увеличить количество.
   */
  increaseQuantity(id: number): void {
    const item = this._items[this.findIndexById(id)];
    if ( item && !item.product.isSingleInstance ) item.quantity++;
  }

  /**
   * Уменьшает количество товара на один в корзине или удаляет его по его идентификатору.
   * 
   * ### Параметры:
   * @param {number} id - Идентификатор товара, который нужно удалить.
   * 
   * ### Примечание:
   * Если количество товара равно 1 и товар не является единичным экземпляром, 
   * товар будет удален из корзины.
   */
  decreaseQuantity(id: number): void {
    const index = this.findIndexById(id);
    
    if (index !== -1) { 
      const condition = this._items[index].quantity > 1 && !this._items[index].product.isSingleInstance;
      condition ? this._items[index].quantity-- : this._items.splice(index, 1);
    }
  }

  /**
   * Возвращает суммарную стоимость всех товаров в корзине без учета скидок.
   * 
   * ### Пример использования:
   * ```javascript
   * const cart = new Cart();
   * 
   * const item1 = { name: 'Product A', price: 100 };
   * const item2 = { name: 'Product B', price: 150 };
   * 
   * cart.add(item1);
   * cart.add(item2);
   * 
   * console.log(cart.getTotalPrice()); // Вывод: 250
   * ```
   */
  getTotalPrice(): number {
    return this._items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }

  /**
   * Возвращает суммарную стоимость всех товаров в корзине с учетом скидки.
   * 
   * ### Пример использования:
   * ```javascript
   * const cart = new Cart();
   * 
   * const item1 = { name: 'Product A', price: 100 };
   * const item2 = { name: 'Product B', price: 150 };
   * 
   * cart.add(item1);
   * cart.add(item2);
   * 
   * console.log(cart.getTotalPriceWithDiscount(0.1)); // Вывод: 225
   * ```
   */
  getTotalPriceWithDiscount(discount: number): number {
    return this._items.reduce((total, item) => {
      return total + item.product.price * item.quantity * (1 - discount);
    }, 0);
  }

  /**
   * Удаляет добавленный товар из корзины по его идентификатору.
   * 
   * ### Пример использования:
   * ```javascript
   * const cart = new Cart();
   * 
   * const item1 = { id: 1, name: 'Product A', price: 100 };
   * const item2 = { id: 2, name: 'Product B', price: 150 };
   * 
   * console.log(cart.items); // Вывод: [ item1, item2 ]
   * 
   * cart.add(item1);
   * cart.add(item2);
   * 
   * cart.remove(1);
   * 
   * console.log(cart.items); // Вывод: [item2]
   * ```
   */
  remove(id: number): void {
    const index = this.findIndexById(id);
    if (index !== -1) this._items.splice(index, 1);
  }

  /**
   * Возвращает индекс товара в корзине по его идентификатору.
   * 
   * ### Пример использования:
   * ```javascript
   * const cart = new Cart();
   * 
   * const item1 = { id: 1, name: 'Product A', price: 100 };
   * const item2 = { id: 2, name: 'Product B', price: 150 };
   * 
   * cart.add(item1);
   * cart.add(item2);
   * 
   * console.log(cart._findIndexById(1)); // Вывод: 0
   * console.log(cart._findIndexById(2)); // Вывод: 1
   * console.log(cart._findIndexById(3)); // Вывод: -1
   * ```
   */
  private findIndexById(id: number): number {
    return this._items.findIndex((item) => item.product.id === id);
  }
}
