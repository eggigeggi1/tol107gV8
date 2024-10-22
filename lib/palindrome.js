import { reverse } from './reverse.js';
import { isString } from './helpers.js';

/**
 * Tekur inn streng og skilar true ef strengurinn er palindrome.
 * Skilar false ef strengurinn er tómur
 * Skilar false ef strengurinn er ekki strengur.
 * @param {String} str strengur sem skal skoða hvort er palindrome
 * @returns true ef strengur er palindrome
 */
export function palindrome(str) {
    if (!isString(str)) {
      return false;
    }
  
    if (str.trim('') == '') {
      return false;
    }
  
    const lowerString = str.toLowerCase();
  
    const reverseString = reverse(lowerString);
  
    return lowerString == reverseString;
  }
  console.assert(palindrome('Hallo') === false, 'palindrome: skilar false ef strengurinn er ekki palindrome');
  console.assert(palindrome('Halloollah') === true, 'palindrome: skilar true ef strengurinn er palindrome');
  console.assert(palindrome(42) === false, 'palindrome: skilar false fyrir annað en strengi');
  console.assert(palindrome('') === false, 'palindrome: skilar false ef strengurinn er tómur');