import { Genre } from '../../enums/Genre';
import IBuyable from '../../interfaces/IBuyable';
import IDuration from '../../interfaces/IDuration';
import IMovie from '../../interfaces/IMovies';
import { MovieCountry } from '../../types/movies';

/**
 * Класс `Movie` реализует интерфейс `IMovie` и `IBuyable`, а также представляет фильм.
 */
export default class Movie implements IBuyable, IMovie {
  readonly id: number;
  readonly name: string;
  readonly price: number;
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
    this.originalName = data.originalName;
    this.yearOfRelease = data.yearOfRelease;
    this.country = data.country;
    this.genre = data.genre;
    this.slogan = data.slogan;
    this.duration = data.duration;
    this.poster = data.poster;
  }
}
