export type Language = 'vi' | 'en';

export type TextTransformProps = 'capitalizeWords' | 'capitalizeFirstLetter' | 'uppercase' | 'lowercase';

export type Options = {
  lang?: Language;
  textTransform?: TextTransformProps;
  currencyUnit?: string;
}