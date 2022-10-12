import { TextTransformProps } from "../types";

export const toUpperCase = (str: string) => str.toUpperCase();

export const toLowerCase = (str: string) => str.toLowerCase();

export const toCapitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const toCapitalizeWords = (str: string) => str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

export const transformText = (str: string, textTransform?: TextTransformProps) => {
  switch (textTransform) {
    case 'capitalizeWords':
      return toCapitalizeWords(str);
    case 'capitalizeFirstLetter':
      return toCapitalizeFirstLetter(str);
    case 'uppercase':
      return toUpperCase(str);
    case 'lowercase':
      return toLowerCase(str);
    default:
      return str;
  }
}
