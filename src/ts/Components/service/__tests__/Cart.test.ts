import Cart from '../Cart';

describe('Класс Cart', () => {
  describe('Конструктор', () => {
    test('создает корзину с пустым массивом товаров', () => {
      const cart = new Cart();
      expect(cart.items.length).toBe(0);
    });
  });

  describe('Метод', () => {
    let cart: Cart;
    const item1 = { id: 1, name: 'Product A', price: 100 };
    const item2 = { id: 2, name: 'Product B', price: 150 };

    beforeEach(() => {
      cart = new Cart();
    });

    describe('add()', () => {
      test('добавляет 1 товар в корзину', () => {
        const item = { id: 1, name: 'Product A', price: 100 };

        cart.add(item);

        expect(cart.items).toContainEqual(item);
      });
    });

    describe('get items()', () => {
      test('возвращает массив товаров', () => {
        cart.add(item1);
        cart.add(item2);

        expect(cart.items).toContainEqual(item1);
        expect(cart.items).toContainEqual(item2);
      });
    });

    describe('getTotalPrice()', () => {
      test('возвращает общую стоимость товаров в корзине без учета скидок', () => {
        cart.add(item1);
        cart.add(item2);

        expect(cart.getTotalPrice()).toBe(250);
      });

      test('возвращает общую стоимость товаров в корзине с учетом скидки', () => {
        cart.add(item1);
        cart.add(item2);

        expect(cart.getTotalPriceWithDiscount(0.1)).toBe(225);
      });
    });

    describe('remove()', () => {
      test('удаляет товар из корзины', () => {
        cart.add(item1);
        cart.add(item2);

        cart.remove(1);

        expect(cart.items).not.toContainEqual(item1);
        expect(cart.items).toContainEqual(item2);
      });

      test('не удаляет товар, если его нет в корзине', () => {
        cart.add(item1);
        cart.add(item2);

        expect(cart.items.length).toBe(2);

        cart.remove(3);

        expect(cart.items.length).toBe(2);
      });
    });
  });
});
