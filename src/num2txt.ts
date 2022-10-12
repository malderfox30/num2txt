import { defaultOptions } from "./configs";
import { transformText } from "./helpers/text";
import { tripletToEng } from "./helpers/tripletToEng";
import { tripletToVie } from "./helpers/tripletToVie";

const suffixes = ['', 'nghìn ', 'triệu ', 'tỷ ', 'nghìn tỷ ', 'triệu tỷ ', 'tỷ tỷ '];

const suffixesEng = ['', 'thousand ', 'million ', 'billion ', 'trillion ', 'quadrillion ', 'quintillion '];

export function num2txt(value: string, options = defaultOptions) {
  const customOptions = { ...defaultOptions, ...options };
  const triplets = [0, 0, 0, 0, 0, 0, 0];
  let index = 0;
  let outputString = '';
  let number = parseInt(value);
  if (number == 0) {
      outputString += customOptions?.lang === 'en' ? 'zero ' : 'không ';
  }
  while (number >= 1) {
      triplets[index++] = number % 1000;
      number = Math.floor(number / 1000);
  }
  triplets.reverse();
  suffixes.reverse();
  suffixesEng.reverse();
  for (const [tIndex, triplet] of triplets.entries()) {
    if(customOptions?.lang === 'en') {
      outputString += tripletToEng(triplet);
      if (triplet != 0) {
          outputString += suffixesEng[tIndex];
      }
    }
    else {
      outputString += tripletToVie(triplet, Math.abs(7 - tIndex - index));
      if (triplet != 0) {
        outputString += suffixes[tIndex];
      }
    }
  }
  suffixes.reverse();
  suffixesEng.reverse();
  if (customOptions?.currencyUnit) {
    outputString += customOptions?.currencyUnit;
    if (customOptions?.lang === 'en' && parseInt(value) > 1) {
      outputString += 's';
    } 
  }
  return transformText(outputString.trim(), customOptions?.textTransform);
}
