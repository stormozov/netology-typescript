import IBuyable from '../interfaces/IBuyable';

/**
 * Класс `Book` реализует интерфейс `IBuyable` и представляет книгу.
 * 
 * ### Пример использования:
 * ```javascript
 * const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
 * console.log(book); // Вывод: { id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225 }
 * ```
 * 
 * @implements {IBuyable}
 */
export default class Book implements IBuyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
    readonly pages: number,
  ) { }
}
