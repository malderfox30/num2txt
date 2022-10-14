import num2txt from '../index';

describe('num2txt tests', () => {
  test('should return value correctly', () => {
    expect(num2txt('47902574895729')).toBe('Bốn mươi bảy nghìn tỷ chín trăm linh hai tỷ năm trăm bảy mươi tư triệu tám trăm chín mươi lăm nghìn bảy trăm hai mươi chín');
  });

  test('should return value correctly 2', () => {
    expect(num2txt('24')).toBe('Hai mươi tư');
  });

  test('should return value correctly 3', () => {
    expect(num2txt('4')).toBe('Bốn');
  });

  test('should return value correctly 4', () => {
    expect(num2txt('32', { lang: 'en' })).toBe('Thirty two');
  });

  test('should return value correctly 5', () => {
    expect(num2txt('1034')).toBe('Một nghìn không trăm ba mươi tư');
  });

  test('should return value correctly 6', () => {
    expect(num2txt('2002')).toBe('Hai nghìn không trăm linh hai');
  });

  test('should return value correctly 7', () => {
    expect(num2txt('1001002')).toBe('Một triệu không trăm linh một nghìn không trăm linh hai');
  });

  test('should return value correctly 8', () => {
    expect(num2txt('1001002', { commaSeparator: true })).toBe('Một triệu, không trăm linh một nghìn, không trăm linh hai');
  });

  test('should return value correctly 9', () => {
    expect(num2txt('-1001002')).toBe('Âm một triệu không trăm linh một nghìn không trăm linh hai');
  });

  test('should return value correctly 10', () => {
    expect(num2txt('-1001012', { lang: 'en' })).toBe('Negative one million one thousand and twelve');
  });

  test('should return value correctly 11', () => {
    expect(num2txt('3031', { lang: 'en' })).toBe('Three thousand and thirty one');
  });

  test('should return value correctly 12', () => {
    expect(num2txt('87654321', { lang: 'vi', commaSeparator: true })).toBe('Tám mươi bảy triệu, sáu trăm năm mươi tư nghìn, ba trăm hai mươi mốt');
  });

  test('should return value correctly 13', () => {
    expect(num2txt('32000', { lang: 'vi', textTransform: 'capitalizeWords' })).toBe('Ba Mươi Hai Nghìn');
  });

  test('should return value correctly 14', () => {
    expect(num2txt('32001', { lang: 'en', textTransform: 'capitalizeWords' })).toBe('Thirty Two Thousand And One');
  });

  test('should return value correctly 15', () => {
    expect(num2txt(32001, { lang: 'en', textTransform: 'capitalizeWords' })).toBe('Thirty Two Thousand And One');
  });

  test('should return value correctly 16', () => {
    expect(num2txt(1000000, { lang: 'en' })).toBe('One million');
  });
});
