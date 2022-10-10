import { defaultOptions } from "./configs";
import { tripletToVie } from "./helpers/tripletToVie";
import { Options } from "./types";

const suffixes = ['', 'nghìn ', 'triệu ', 'tỷ ', 'nghìn tỷ ', 'triệu tỷ ', 'tỷ tỷ '];

export function num2txt(value: string, options = defaultOptions) {
  const triplets = [0, 0, 0, 0, 0, 0, 0];
  let index = 0;
  let outputString = '';
  let number = parseInt(value);
  if (number == 0) {
      outputString += 'không ';
  }
  while (number >= 1) {
      triplets[index++] = number % 1000;
      number = Math.floor(number / 1000);
  }
  triplets.reverse();
  suffixes.reverse();
  for (const [index, triplet] of triplets.entries()) {
      outputString += tripletToVie(triplet, index);
      if (triplet != 0) {
          outputString += suffixes[index];
      }
  }
  if (options?.isCurrency) {
    outputString += options?.currencyUnit;
  }
  return outputString;
}
