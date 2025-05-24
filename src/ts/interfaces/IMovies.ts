import IDuration from './IDuration';
import { Genre } from '../enums/Genre';
import { MovieCountry } from '../types/movies';

export default interface IMovie {
  originalName: string;
  yearOfRelease: number;
  country: MovieCountry;
  genre: Genre[];
  slogan?: string;
  duration?: IDuration;
  poster?: string;
}
