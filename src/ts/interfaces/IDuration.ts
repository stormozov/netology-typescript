/**
 * Интерфейс для хранения информации о времени.
 * 
 * Он включает следующие свойства:
 * - `hours?`: количество часов (например, 2).
 * - `minutes?`: количество минут (например, 137).
 * - `formattedMinutes?`: строковое представление минут в формате "мм мин.". (например, 137 мин.)
 * - `formattedHoursMinutes?`: строковое представление времени в формате "чч:мм". (например, 02:37)
 * 
 * @interface
 */
export default interface IDuration {
  hours?: number;
  minutes?: number;
  formattedMinutes?: string;
  formattedHoursMinutes?: string;
}
