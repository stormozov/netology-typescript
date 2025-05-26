import { Genre } from '../../enums/Genre';
import IBuyable from '../../interfaces/IBuyable';
import IDuration from '../../interfaces/IDuration';
import IMovie from '../../interfaces/IMovies';
import { MovieCountry } from '../../types/movies';

/**
 * Класс `Movie` представляет фильм.
 * 
 * Реализует интерфейс `IBuyable` и `IMovie`.
 * 
 * ### Поля:
 * @param {IMovie & IBuyable} data - Объект, содержащий информацию о фильме и его цене.
 * 
 * ### Пример использования:
 * ```javascript
 * const movie = new Movie({
   *   id: 1,
   *   name: 'The Shawshank Redemption',
   *   price: 10,
   *   isSingleInstance: true,
   *   originalName: 'The Shawshank Redemption',
   *   yearOfRelease: 1994,
   *   country: 'США',
   *   genre: [Genre.Drama, Genre.Crime],
   *   slogan: 'Fear can hold you prisoner. Hope can set you free.',
   *   duration: {
     *     hours: 2,
     *     minutes: 22,
     *     formattedMinutes: '142 мин.',
     *     formattedHoursMinutes: '02:22',
    *   },
    *   poster: 'the_shawshank_redemption.jpg',
  * });
 */
export default class Movie implements IBuyable, IMovie {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly isSingleInstance: boolean;
  readonly originalName: string;
  readonly yearOfRelease: number;
  readonly country: MovieCountry;
  readonly genre: Genre[];
  readonly slogan?: string;
  readonly duration?: IDuration;
  readonly poster?: string;

  constructor(data: IMovie & IBuyable) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.isSingleInstance = data.isSingleInstance;
    this.originalName = data.originalName;
    this.yearOfRelease = data.yearOfRelease;
    this.country = data.country;
    this.genre = data.genre;
    this.slogan = data.slogan;
    this.duration = data.duration;
    this.poster = data.poster;
  }
}
