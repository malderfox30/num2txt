# num2txt

Converts number to Vietnamese or English text with customized output.

## Installation

```bash
npm install num2txt
```

or

```bash
yarn add num2txt
```

## Basic Usage

```javascript
import num2txt from 'num2txt'

num2txt('32') // Ba mươi hai
num2txt('32', { lang: 'en' }) // Thirty two
num2txt('32000', { lang: 'vi', currencyUnit: 'đồng' }) // Ba mươi hai nghìn đồng
num2txt('32000', { lang: 'vi', textTransform: 'capitalizeWords' }) // Ba Mươi Hai Nghìn
num2txt('87654321', { lang: 'vi', commaSeparator: true }) // Tám mươi bảy triệu, sáu trăm năm mươi tư nghìn, ba trăm hai mươi mốt

```

## Options

| Option                    | Type                 | Default        | Description                                                                        |
| ----------------------- | -------------------- | -------------- | ---------------------------------------------------------------------------------- |
| lang                    | `Language`             | `'vi'`        | Output text language, default to Vietnamese; `Language = 'vi' \| 'en'`
| textTransform           | `TextTransformProps`             | `'capitalizeFirstLetter'`       |  Text transform style `TextTransformProps = 'capitalizeWords' \| 'capitalizeFirstLetter' \| 'uppercase' \| 'lowercase'`                          |
| currencyUnit                    | `string`            | `undefined`        | Unit of currency                                            |
| commaSeparator                 | `boolean`             | `false`          | Comma separator in output text                                                             |

## License

[MIT](https://choosealicense.com/licenses/mit/)
