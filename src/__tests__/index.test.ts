import num2txt from '../index';

describe('num2txt tests', () => {
  test('should return value correctly', () => {
    expect(num2txt('47902574895729')).toBe('bốn mươi bảy nghìn tỷ chín trăm linh hai tỷ năm trăm bảy mươi tư triệu tám trăm chín mươi lăm nghìn bảy trăm hai mươi chín');
  });

  test('should return value correctly 2', () => {
    expect(num2txt('24')).toBe('hai mươi tư');
  });

  test('should return value correctly 3', () => {
    expect(num2txt('4')).toBe('bốn');
  });

  test('should return value correctly 4', () => {
    expect(num2txt('32', { lang: 'en' })).toBe('thirty two');
  });

  test('should return value correctly 5', () => {
    expect(num2txt('1034')).toBe('một nghìn không trăm ba mươi tư');
  });

  test('should return value correctly 6', () => {
    expect(num2txt('2002')).toBe('hai nghìn không trăm linh hai');
  });

  test('should return value correctly 7', () => {
    expect(num2txt('1001002')).toBe('một triệu không trăm linh một nghìn không trăm linh hai');
  });
});
