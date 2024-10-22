import { isString, splitOnWhitespace } from './helpers.js';

/**
 * Fallið tekur inn streng og skilar lengsta orðinu í strengnum.
 * Skilar tómum streng ef strengurinn er tómur.
 * Skilar null ef strengurinn er ekki strengur
 * @param {string} str Strengur sem skal finna lengsta orðið í 
 */
export function longest(str) {
    if (!isString(str)) {
      return null;
    }
  
    const words = splitOnWhitespace(str);
  
    if (words.length == 0) {
      return '';
    }
  
    let longestWord = words[0];
  
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  // Prófum fallið
  console.assert(longest('a aa aaa') === 'aaa', 'longest: skilar aaa eða lengsta orðinu í strengnum');
  console.assert(longest(42) === null, 'longest: skilar null fyrir annað en strengi');
  console.assert(longest('') === '', 'longest: skilar tómum streng ef strengurinn er tómur');