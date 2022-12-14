import { TRIPLET_MAX_LENGTH } from './../num2txt';
const unitNumbers = [
  '',
  'one ',
  'two ',
  'three ',
  'four ',
  'five ',
  'six ',
  'seven ',
  'eight ',
  'nine ',
  'ten ',
  'eleven ',
  'twelve ',
  'thirteen ',
  'fourteen ',
  'fifteen ',
  'sixteen ',
  'seventeen ',
  'eighteen ',
  'nineteen ',
];

const tens = [
  '',
  '',
  'twenty ',
  'thirty ',
  'forty ',
  'fifty ',
  'sixty ',
  'seventy ',
  'eighty ',
  'ninety ',
];

export function tripletToEng(triplet: number, index: number, isMoreThanAThousand: boolean) {
  let currentTriplet = triplet;
  let string = '';
  let isLessThanTwenty = false;
  let t = 100;
  let n = 0;
  if (index >= TRIPLET_MAX_LENGTH - 1 && isMoreThanAThousand && triplet > 0) {
    string += 'and ';
  }
  if (currentTriplet < 20) {
      string += unitNumbers[triplet];
      isLessThanTwenty = true;
  }
  while (currentTriplet >= 1 && isLessThanTwenty === false) {
      n = Math.floor(currentTriplet / t);
      if (n > 0 && t === 100) {
          string += unitNumbers[n] + 'hundred ';
      }
      if (t == 10) {
          if (currentTriplet < 20) {
              string += unitNumbers[currentTriplet];
              isLessThanTwenty = true;
          } else {
              string += tens[n];
          }
      }
      if (t == 1) {
          string += unitNumbers[n]
      }
      currentTriplet -= n * t;
      t = Math.floor(t / 10);
  }
  return string;
}

