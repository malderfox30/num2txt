import num2txt from '../index';

describe('num2txt tests', () => {
  test('should return value correctly', () => {
    expect(num2txt('47902574895729')).toBe('bốn mươi bảy nghìn tỷ chín trăm linh hai tỷ năm trăm bảy mươi tư triệu tám trăm chín mươi lăm nghìn bảy trăm hai mươi chín ');
  });
});
