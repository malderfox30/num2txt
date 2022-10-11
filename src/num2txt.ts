import { defaultOptions } from "./configs";
import { tripletToEng } from "./helpers/tripletToEng";
import { tripletToVie } from "./helpers/tripletToVie";

const suffixes = ['tỷ tỷ ', 'triệu tỷ ', 'nghìn tỷ ', 'tỷ ', 'triệu ', 'nghìn ', ''];

const suffixesEng = ['quintillion ', 'quadrillion ', 'trillion ', 'billion ', 'million ', 'thousand ', ''];

export function num2txt(value: string, options = defaultOptions) {
  const triplets = [0, 0, 0, 0, 0, 0, 0];
  let index = 0;
  let outputString = '';
  let number = parseInt(value);
  if (number == 0) {
      outputString += options?.lang === 'vi' ? 'không ' : 'zero ';
  }
  while (number >= 1) {
      triplets[index++] = number % 1000;
      number = Math.floor(number / 1000);
  }
  triplets.reverse();
  for (const [index, triplet] of triplets.entries()) {
    if(options?.lang === 'vi') {
      outputString += tripletToVie(triplet, index);
      if (triplet != 0) {
        outputString += suffixes[index];
      }
    }
    else {
      outputString += tripletToEng(triplet);
      if (triplet != 0) {
          outputString += suffixesEng[index];
      }
    }
  }
  if (options?.currencyUnit) {
    outputString += options?.currencyUnit;
  }
  return outputString.trim();
}
