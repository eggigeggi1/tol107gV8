import { isString } from './helpers.js';

const VOWELS = 'aeiouyáéýúíóöæ'.split('');

/**
 * Skoðar hversu margir sérhljóðar eru í streng
 * Skilar 0 ef strengurinn er tómur eða ekki strengur.
 * @param {String} str strengur sem skal telja sérhljóða í
 * @returns tölu á sérhljóðum
 */
export function vowels(str) {
    if (!isString(str)) {
      return 0;
    }
  
    let count = 0;
    const letters = str.split('');
  
    for (const letter of letters) {
      if (VOWELS.includes(letter.toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }
  
  console.assert(vowels('Hallo') === 2, 'vowels: skilar tölu á sérhljóðum í streng');
  console.assert(vowels(42) === 0, 'vowels: skilar 0 fyrir annað en strengi');
  console.assert(vowels('') === 0, 'vowels: skilar 0 ef strengurinn er tómur');