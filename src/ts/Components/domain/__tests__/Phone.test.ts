import { PhoneColor } from '../../../enums/PhoneColor';
import { PhoneOS } from '../../../enums/PhoneOS';
import Phone from '../Phone';

describe('Класс Phone', () => {
  const iphoneData = {
    id: 1,
    name: 'iPhone 13',
    price: 1000,
    isSingleInstance: true,
    color: [PhoneColor.Black],
    memory: 128,
    camera: 12,
    battery: 4000,
    os: PhoneOS.iOS,
    screen: 6.1,
    screenDiagonal: 6.1
  };

  let phone: Phone;

  beforeEach(() => {
    phone = new Phone(iphoneData);
  });

  it('должен корректно инициализировать поля', () => {
    const expectedFields = [
      'id',
      'name',
      'price',
      'isSingleInstance',
      'color',
      'memory',
      'camera',
      'battery',
      'os',
      'screen',
      'screenDiagonal'
    ];
  
    expectedFields.forEach(field => {
      expect(phone).toHaveProperty(field);
    });
  });  

  it('должен иметь правильный тип для поля color', () => {
    expect(Array.isArray(phone.color)).toBe(true);
    expect(phone.color).toContain(PhoneColor.Black);
  });

  it('должен иметь правильный тип для поля os', () => {
    expect(phone.os).toBe(PhoneOS.iOS);
  });

  it('должен быть экземпляром класса Phone', () => {
    expect(phone).toBeInstanceOf(Phone);
  });
});
