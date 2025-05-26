import IBuyable from './IBuyable';

/**
 * Интерфейс `CartItem` описывает объект корзины.
 */
export default interface ICartItem {
  product: IBuyable;
  quantity: number;
}
