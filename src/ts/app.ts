import Cart from './Components/service/Cart';
import Book from './Components/domain/Book';
import MusicAlbum from './Components/domain/MusicAlbum';
import Movie from './Components/domain/Movie';
import { Genre } from './enums/Genre';

const movie1 = {
  id: 1008,
  name: 'Мстители',
  originalName: 'The Avengers',
  price: 1000,
  yearOfRelease: 2012,
  country: 'США',
  genre: [ Genre.Action, Genre.SciFi, ],
  time: { formattedHoursMinutes: '02:37', },
}

const cart = new Cart();
console.log(cart.items);

cart.add(new Book( 1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225 ));
cart.add(new MusicAlbum( 1008, 'Meteora', 'Linkin Park', 900 ));
cart.add(new Movie(movie1));

console.log(cart.items);
