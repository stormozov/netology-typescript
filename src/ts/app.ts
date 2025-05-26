import Cart from './Components/service/Cart';
import Book from './Components/domain/Book';
import MusicAlbum from './Components/domain/MusicAlbum';
import Movie from './Components/domain/Movie';
import { Genre } from './enums/Genre';
import IBuyable from './interfaces/IBuyable';
import IMovie from './interfaces/IMovies';

const movie1: IBuyable & IMovie = {
  id: 1008,
  name: 'Мстители',
  originalName: 'The Avengers',
  price: 1000,
  yearOfRelease: 2012,
  country: 'США',
  genre: [ Genre.Action, Genre.SciFi, ],
  duration: { formattedHoursMinutes: '02:37', },
  isSingleInstance: true,
}
const testingData = [
  new Book( 1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false ),
  new MusicAlbum( 1008, 'Meteora', 'Linkin Park', 900, false ),
  new Movie(movie1),
]

const cart = new Cart();
console.log(cart.items);

testingData.forEach((item) => cart.add(item));

console.log(cart.items);
