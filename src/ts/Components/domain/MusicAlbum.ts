import IBuyable from '../../interfaces/IBuyable';

/**
 * Класс `MusicAlbum` представляет музыкальный альбом.
 * 
 * Реализует интерфейс `IBuyable`.
 * 
 * ### Поля:
 * @param {number} id - Идентификатор альбома.
 * @param {string} name - Название альбома.
 * @param {string} author - Автор альбома.
 * @param {number} price - Цена альбома.
 * @param {boolean} isSingleInstance - Флаг, указывающий, можно ли добавлять 
 * товар несколько раз в корзину.
 * 
 * ### Пример использования:
 * ```javascript
 * const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, false);
 * console.log(musicAlbum); // Вывод: { id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900 }
 * ```
 */
export default class MusicAlbum implements IBuyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
    readonly isSingleInstance: boolean = false,
  ) { }
}

