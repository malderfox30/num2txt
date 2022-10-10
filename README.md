# num2txt

Converts numbers to Vietnamese or English text with currency unit options to customize the output.

## Installation

```bash
npm install num2txt
```

or

```bash
yarn add num2txt
```

## Usage

```javascript
import num2txt from 'num2txt'

num2txt('32') // ba mươi hai
num2txt('32', { lang: 'en' }) // thirty three
num2txt('32000', { lang: 'vi', currencyUnit: 'đồng' }) // ba mươi hai nghìn đồng

```

## License

[MIT](https://choosealicense.com/licenses/mit/)
