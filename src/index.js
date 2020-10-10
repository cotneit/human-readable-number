module.exports = function toReadable (number) {
  if (typeof number !== 'number') {
    throw TypeError();
  }

  if (number === 0) {
    return 'zero';
  }

  const numStr = number.toString();
  let result = '';
  
  const units = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }

  const teens = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  }

  const tens = {
    0: '',
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  }

  for (let i = 0; i < numStr.length; i++) {
    const currentDigit = numStr[numStr.length - i - 1];

    switch (i) {
      case 0:
        const nextDigit = numStr[numStr.length - i - 2];

        if (nextDigit !== '1') {
          result = units[currentDigit]
        }
        break;
      case 1:
        if (currentDigit === '1') {
          const previousDigit = numStr[numStr.length - i];
          const composed = currentDigit + previousDigit;
          result = teens[composed];
        } else if (currentDigit !== '0') {
          result = result ? `${tens[currentDigit]} ${result}` : tens[currentDigit];
        }
        break;
      case 2:
        result = result ? `${units[currentDigit]} hundred ${result}` : `${units[currentDigit]} hundred`;
        break;
      default:
        break;
    }
  }

  return result;
}
