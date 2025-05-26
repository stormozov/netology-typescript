import IBuyable from '../../../interfaces/IBuyable';
import Cart from '../Cart';

describe('Класс Cart', () => {
  describe('Конструктор', () => {
    it('создает корзину с пустым массивом товаров', () => {
      const cart: Cart = new Cart();
      expect(cart.items.length).toBe(0);
    });
  });

  describe('Метод', () => {
    let cart: Cart;
    const item1: IBuyable = { 
      id: 1, 
      name: 'Product A', 
      price: 100, 
      isSingleInstance: false 
    };
    const item2: IBuyable = { 
      id: 2, 
      name: 'Product B', 
      price: 150, 
      isSingleInstance: false 
    };
    const item3: IBuyable = { 
      id: 3, 
      name: 'Product C', 
      price: 200, 
      isSingleInstance: true 
    };
    const items: IBuyable[] = [ item1, item2 ];

    beforeEach(() => {
      cart = new Cart();
    });

    describe('get items()', () => {
      it('возвращает массив товаров', () => {
        items.forEach((item) => cart.add(item));
        expect(cart.items).toContainEqual({ product: item1, quantity: 1 });
      });
    });

    describe('add()', () => {
      it('добавляет 1 товар в корзину', () => {
        cart.add(item1);
        expect(cart.items[0].product).toEqual(item1);
      });

      it('добавляет 2 товара в корзину', () => {
        const expectedItems: object[] = [ 
          { product: item1, quantity: 1 },
          { product: item2, quantity: 1 }
        ];

        items.forEach((item) => cart.add(item));

        expectedItems.forEach((expectedItem) => {
          expect(cart.items).toContainEqual(expectedItem);
        });
      });

      it('(товар не единичный) увелич. кол-во одного товара в корзине', () => {
        cart.add(item1);
        cart.add(item1);

        expect(cart.items[0].quantity).toBe(2);
      });

      it('(товар единичный) не увелич. кол-во одного товара в корзине', () => {
        cart.add(item3);
        cart.add(item3);

        expect(cart.items[0].quantity).toBe(1);
      });
    });

    describe('increaseQuantity()', () => {
      it('(товар не единичный) увелич. кол-во одного товара в корзине', () => {
        cart.add(item1);
        cart.increaseQuantity(item1.id);

        expect(cart.items[0].quantity).toBe(2);
      });

      it('(товар единичный) не увелич. кол-во одного товара в корзине', () => {
        cart.add(item3);
        cart.increaseQuantity(item3.id);

        expect(cart.items[0].quantity).toBe(1);
      });

      it('(товар не единичный) возвращает общую стоимость товаров в корзине без учета скидок', () => {
        cart.add(item2);
        cart.increaseQuantity(item2.id);

        expect(cart.getTotalPrice()).toBe(300);
      });
    });

    describe('decreaseQuantity()', () => {
      it('(товар не единичный) уменьш. кол-во одного товара в корзине', () => {
        cart.add(item1);

        cart.increaseQuantity(item1.id);
        cart.decreaseQuantity(item1.id);

        expect(cart.items[0].quantity).toBe(1);
      });

      it('(товар не единичный) уменьшение количества ниже 1 удаляет товар', () => {
        cart.add(item1);
        cart.decreaseQuantity(item1.id);

        expect(cart.items.length).toBe(0);
      });

      it('(товар единичный) не уменьш. кол-во одного товара в корзине', () => {
        cart.add(item3);
        cart.decreaseQuantity(item3.id);

        expect(cart.items.length).toBe(0);
      });

      it('не уменьш. кол-во товара, если его нет в корзине', () => {
        cart.decreaseQuantity(10);
        expect(cart.items.length).toBe(0);
      });
    });

    describe('getTotalPrice() и getTotalPriceWithDiscount()', () => {
      it('возвращает общую стоимость товаров в корзине без учета скидок', () => {
        items.forEach((item) => cart.add(item));
        expect(cart.getTotalPrice()).toBe(250);
      });

      it('возвращает общую стоимость товаров в корзине с учетом скидки', () => {
        items.forEach((item) => cart.add(item));
        expect(cart.getTotalPriceWithDiscount(0.1)).toBe(225);
      });

      it('возвращает 0, если корзина пуста', () => {
        expect(cart.getTotalPrice()).toBe(0);
      })
    });

    describe('remove()', () => {
      it('удаляет товар из корзины', () => {
        items.forEach((item) => cart.add(item));

        cart.remove(1);

        expect(cart.items).not.toContainEqual(item1);
        expect(cart.items).toContainEqual({ product: item2, quantity: 1 });
      });

      it('не удаляет товар, если его нет в корзине', () => {
        items.forEach((item) => cart.add(item));

        expect(cart.items.length).toBe(2);

        cart.remove(3);

        expect(cart.items.length).toBe(2);
      });
    });
  });
});
