import { PhoneColor } from '../../enums/PhoneColor';
import { PhoneOS } from '../../enums/PhoneOS';
import IBuyable from '../../interfaces/IBuyable';
import { IPhone } from '../../interfaces/IPhone';

/**
 * Класс `Phone` представляет телефон.
 * 
 * Реализует интерфейс `IBuyable` и `IPhone`.
 * 
 * ### Поля:
 * @param {IBuyable & IPhone} data - Объект, содержащий информацию о телефоне.
 * 
 * ### Пример использования:
 * ```javascript
 * const phone = new Phone({
   *   id: 1,
   *   name: 'iPhone 13',
   *   price: 1000,
   *   isSingleInstance: true,
   *   color: 'black',
   *   memory: 128,
   *   camera: 12,
   *   battery: 4000,
   *   os: 'iOS',
   *   screen: 6.1,
   *   screenDiagonal: 6.1
 * });
 * ```
 */
export default class Phone implements IBuyable, IPhone {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly isSingleInstance: boolean;
  readonly color: PhoneColor[];
  readonly memory: number;
  readonly camera: number;
  readonly battery: number;
  readonly os: PhoneOS;
  readonly screen: number;
  readonly screenDiagonal: number;

  constructor(data: IBuyable & IPhone) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.isSingleInstance = data.isSingleInstance;
    this.color = data.color;
    this.memory = data.memory;
    this.camera = data.camera;
    this.battery = data.battery;
    this.os = data.os;
    this.screen = data.screen;
    this.screenDiagonal = data.screenDiagonal;
  }
}
