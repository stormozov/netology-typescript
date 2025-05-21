/**
 * Интерфейс IBuyable описывает объект, который можно купить.
 * 
 * Он включает следующие свойства:
 * - `id`: уникальный числовой идентификатор объекта.
 * - `name`: строковое название объекта.
 * - `price`: числовая цена объекта.
 * 
 * @interface
 */
export default interface IBuyable {
    readonly id: number;
    readonly name: string;
    readonly price: number;
}
