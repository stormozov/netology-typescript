import Cart from '../Cart';

describe('Класс Cart', () => {
  test('создается корзина с пустым массивом товаров', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
  });
});
