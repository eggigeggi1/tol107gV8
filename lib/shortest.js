import { isString, splitOnWhitespace } from './helpers.js';

/**
 * Fallið tekur inn streng og skilar stysta orðinu í strengnum.
 * Skilar tómum streng ef strengurinn er tómur.
 * Skilar null ef strengurinn er ekki strengur
 * @param {string} str strengur sem skal finna stysta orðið í
 * @returns streng með stysta orðinu
 */
export function shortest(str) {
    if (!isString(str)) {
      return null;
    }
  
    const words = splitOnWhitespace(str);
  
    if (words.length == 0) {
      return '';
    }
  
    let shortestWord = words[0];
  
    for (const word of words) {
      if (word.length < shortestWord.length) {
        shortestWord = word;
      }
    }
  
    return shortestWord;
  }
  
  // Prófum fallið
  console.assert(shortest('a aa aaa') === 'a', 'shortest: skilar a eða stysta orðinu í strengnum');
  console.assert(shortest(42) === null, 'shortest: skilar null fyrir annað en strengi');
  console.assert(shortest('') === '', 'shortest: skilar tómum streng ef strengurinn er tómur');