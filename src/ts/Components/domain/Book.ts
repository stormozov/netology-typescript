import IBuyable from '../../interfaces/IBuyable';

/**
 * Класс `Book` представляет книгу.
 * 
 * Реализует интерфейс `IBuyable`.
 * 
 * ### Поля:
 * @param {number} id - Идентификатор книги.
 * @param {string} name - Название книги.
 * @param {string} author - Автор книги.
 * @param {number} price - Цена книги.
 * @param {number} pages - Количество страниц.
 * @param {boolean} isSingleInstance - Флаг, указывающий, можно ли добавлять 
 * товар несколько раз в корзину.
 * 
 * ### Пример использования:
 * ```javascript
 * const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false);
 * console.log(book); // Вывод: { id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225 }
 * ```
 */
export default class Book implements IBuyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
    readonly pages: number,
    readonly isSingleInstance: boolean = false,
  ) { }
}
