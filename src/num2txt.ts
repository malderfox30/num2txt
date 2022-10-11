import { defaultOptions } from "./configs";
import { tripletToEng } from "./helpers/tripletToEng";
import { tripletToVie } from "./helpers/tripletToVie";

const suffixes = ['', 'nghìn ', 'triệu ', 'tỷ ', 'nghìn tỷ ', 'triệu tỷ ', 'tỷ tỷ '];

const suffixesEng = ['', 'thousand ', 'million ', 'billion ', 'trillion ', 'quadrillion ', 'quintillion '];

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
  suffixes.reverse();
  suffixesEng.reverse();
  for (const [tIndex, triplet] of triplets.entries()) {
    if(options?.lang === 'vi') {
      outputString += tripletToVie(triplet, Math.abs(7 - tIndex - index));
      if (triplet != 0) {
        outputString += suffixes[tIndex];
      }
    }
    else {
      outputString += tripletToEng(triplet);
      if (triplet != 0) {
          outputString += suffixesEng[tIndex];
      }
    }
  }
  suffixes.reverse();
  suffixesEng.reverse();
  if (options?.currencyUnit) {
    outputString += options?.currencyUnit;
  }
  return outputString.trim();
}
