import { defaultOptions } from "./configs";
import { transformText } from "./helpers/text";
import { tripletToEng } from "./helpers/tripletToEng";
import { tripletToVie } from "./helpers/tripletToVie";

export const TRIPLET_MAX_LENGTH = 7;

const suffixes = ['', 'nghìn ', 'triệu ', 'tỷ ', 'nghìn tỷ ', 'triệu tỷ ', 'tỷ tỷ '];

const suffixesEng = ['', 'thousand ', 'million ', 'billion ', 'trillion ', 'quadrillion ', 'quintillion '];

export function num2txt(value: string | number, options = defaultOptions) {
  const customOptions = { ...defaultOptions, ...options };
  const triplets = [0, 0, 0, 0, 0, 0, 0];
  let isMoreThanAThousand;
  let index = 0;
  let outputString = '';
  try {
    let number = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(number)) {
      throw new Error('Invalid input');
    }
    if (number < 0) {
      outputString += customOptions?.lang === 'en' ? 'negative ' : 'âm ';
      number = Math.abs(number);
    }
    isMoreThanAThousand = number >= 1000;
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
        outputString += tripletToEng(triplet, tIndex, isMoreThanAThousand);
        if (triplet != 0) {
            outputString += suffixesEng[tIndex];
            if (options.commaSeparator && tIndex < TRIPLET_MAX_LENGTH - 1) {
              outputString = outputString.slice(0, -1) + ', ';
            }
        }
      }
      else {
        outputString += tripletToVie(triplet, Math.abs(TRIPLET_MAX_LENGTH - tIndex - index));
        if (triplet != 0) {
          outputString += suffixes[tIndex];
          if (options.commaSeparator && tIndex < TRIPLET_MAX_LENGTH - 1) {
            outputString = outputString.slice(0, -1) + ', ';
          }
        }
      }
    }
    suffixes.reverse();
    suffixesEng.reverse();
    if (customOptions?.currencyUnit) {
      outputString += customOptions?.currencyUnit;
      if (customOptions?.lang === 'en' && (typeof value === 'string' ? parseFloat(value) : value) > 1) {
        outputString += 's';
      } 
    }
    return transformText(outputString.trim(), customOptions?.textTransform);
  }
  catch (error) {
    return error;
  }
}
