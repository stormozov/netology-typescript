import { PhoneColor } from '../enums/PhoneColor';
import { PhoneOS } from '../enums/PhoneOS';

/**
 * Интерфейс для хранения информации о телефоне.
 * 
 * Он включает следующие свойства:
 * - `color`: цвет телефона.
 * - `memory`: объем памяти телефона.
 * - `camera`: разрешение камеры телефона.
 * - `battery`: емкость аккумулятора телефона.
 * - `os`: операционная система телефона.
 * - `screen`: диагональ экрана телефона.
 * - `screenDiagonal`: диагональ экрана телефона.
 * 
 * @interface
 */
export interface IPhone {
  color: PhoneColor[];
  memory: number;
  camera: number;
  battery: number;
  os: PhoneOS;
  screen: number;
  screenDiagonal: number;
}
