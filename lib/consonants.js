import { isString } from './helpers.js';

const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/**
 * Skoðar hversu margir samhljóðar eru í streng.
 * Skilar 0 ef strengurinn er tómur eða ekki strengur.
 * @param {string} str strengur sem skal telja samhljóða í 
 * @returns tölu á samhljóðum
 */
export function consonants(str) {
    if (!isString(str)) {
      return 0;
    }
  
    let count = 0;
    const letters = str.split('');
  
    for (const letter of letters) {
      if (CONSONANTS.includes(letter.toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }
  
  console.assert(consonants('Hallo') === 3, 'consonants: skilar tölu á sérhljóðum í streng');
  console.assert(consonants(42) === 0, 'consonants: skilar 0 fyrir annað en strengi');
  console.assert(consonants('') === 0, 'consonants: skilar 0 ef strengurinn er tómur');