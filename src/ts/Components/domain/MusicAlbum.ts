import IBuyable from '../../interfaces/IBuyable';

/**
 * Класс `MusicAlbum` реализует интерфейс `IBuyable` и представляет музыкальный альбом.
 * 
 * ### Пример использования:
 * ```javascript
 * const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
 * console.log(musicAlbum); // Вывод: { id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900 }
 * ```
 * 
 * @implements {IBuyable}
 */
export default class MusicAlbum implements IBuyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
  ) { }
}

