import Movie from '../Movie';
import { Genre } from '../../../enums/Genre';
import { MovieCountry } from '../../../types/movies';

describe('Класс Movie', () => {
  const requiredFields = {
    id: 1,
    name: 'Мстители',
    price: 799,
    isSingleInstance: true,
    originalName: 'The Avengers',
    yearOfRelease: 2012,
    country: 'США' as MovieCountry,
    genre: [ Genre.Action ],
  };

  const fullFields = {
    ...requiredFields,
    slogan: 'Твой разум - место преступления',
    duration: { 
      hours: 2, 
      minutes: 17, 
      formattedMinutes: '137 мин.', 
      formattedHoursMinutes: '02:17'
    },
    poster: 'inception.jpg',
  };

  describe('Создание объекта', () => {
    it('корректно инициализирует обязательные свойства', () => {
      expect(new Movie(requiredFields)).toMatchObject(requiredFields);
    });

    it('корректно обрабатывает необязательные свойства при их наличии', () => {
      expect(new Movie(fullFields)).toMatchObject({
        slogan: fullFields.slogan,
        duration: expect.objectContaining(fullFields.duration!),
        poster: fullFields.poster
      });
    });

    it('не устанавливает необязательные свойства при их отсутствии', () => {
      const movie = new Movie(requiredFields);
      const emptyFields = [ 'slogan', 'duration', 'poster' ] as const;

      emptyFields.forEach((field) => expect(movie[field]).toBeUndefined());
    });
  });

  describe('Проверка типов данных', () => {
    const movie = new Movie(fullFields);

    it('содержит корректный тип для числовых свойств', () => {
      const fields = [ 'id', 'price', 'yearOfRelease' ] as const;
      fields.forEach((field) => expect(typeof movie[field]).toBe('number'));
    });

    it('содержит корректный тип для строковых свойств', () => {
      const fields = [ 'name', 'originalName', 'country' ] as const;
      fields.forEach((field) => expect(typeof movie[field]).toBe('string'));
    });

    it('содержит массив жанров с допустимыми значениями', () => {
      expect(Array.isArray(movie.genre)).toBe(true);
      movie.genre.forEach((genre) => expect(Object.values(Genre)).toContain(genre));
    });

    it('корректно типизирует продолжительность фильма', () => {
      expect(typeof movie.duration).toBe('object');
      expect(typeof movie.duration.hours).toBe('number');
      expect(typeof movie.duration.minutes).toBe('number');
      expect(typeof movie.duration.formattedMinutes).toBe('string');
      expect(typeof movie.duration.formattedHoursMinutes).toBe('string');
    });
  });
});
