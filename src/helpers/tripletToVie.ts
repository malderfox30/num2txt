const unitNumbers = [
  '',
  'một ',
  'hai ',
  'ba ',
  'bốn ',
  'năm ',
  'sáu ',
  'bảy ',
  'tám ',
  'chín ',
];

export function tripletToVie(triplet: number, index: number) {
  let currentTriplet = triplet;
  let string = '';
  let isLessThanTen = false;
  let t = 100;
  let n = 0;
  let previousN = n;
  if (currentTriplet < 10 && n > 0) {
      if (index > 0) string += 'không trăm lẻ '
      string += unitNumbers[triplet];
      isLessThanTen = true;
  }
  else if (currentTriplet < 100 && index > 0 && n > 0) {
      string += 'không trăm '
  }
  while (currentTriplet >= 1 && isLessThanTen === false) {
      previousN = n;
      n = Math.floor(currentTriplet / t);
      if (n === 5 && t === 1 && previousN > 0) {
          string += 'lăm ';
          break;
      }
      if (n === 1 && t === 1 && previousN > 1) {
          string += 'mốt ';
          break;
      }
      if (n === 4 && t === 1 && previousN >= 2) {
          string += 'tư ';
          break;
      }
      if (n > 1 || t !== 10) {
          string += unitNumbers[n];
      }
      if (t === 100 && n !== 0) {
          string += 'trăm ';
      } else if (t === 10 && n === 1) {
          string += 'mười ';
      } else if (t === 10 && n >= 2) {
          string += 'mươi ';
      }
      if (t === 10 && n === 0) {
          string += 'linh ';
      }
      currentTriplet -= n * t;
      t = Math.floor(t / 10);
  }
  return string;
}
