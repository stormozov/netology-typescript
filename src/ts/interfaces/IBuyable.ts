/**
 * Интерфейс IBuyable описывает объект, который можно купить.
 * 
 * Он включает следующие свойства:
 * - `id`: уникальный числовой идентификатор объекта.
 * - `name`: строковое название объекта.
 * - `price`: числовая цена объекта.
 * - `isSingleInstance`: логическое значение, определяющее, можно ли добавлять 
 * товар несколько раз в корзину.
 * 
 * @interface
 */
export default interface IBuyable {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly isSingleInstance: boolean;
}
