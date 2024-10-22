import { isString, splitOnWhitespace } from './helpers.js';

/**
 * Tekur inn streng og skilar öfugum streng.
 * Skilar tómum streng ef strengurinn er tómur.
 * Skilar null ef strengurinn er ekki strengur
 * @param {string} str strengur sem á að setja afturábak 
 * @returns öfugur strengur
 **/
export function reverse(str) {
    if (!isString(str)) {
      return null;
    }
  
    const words = splitOnWhitespace(str);
  
    if (words.length == 0) {
      return '';
    }
  
    const string = str.split('').reverse();
  
    return string.join('');
  }
  
  // Prófum fallið
  console.assert(reverse('Hallo') === 'ollaH', 'reverse: skilar öfugum streng');
  console.assert(reverse(42) === null, 'reverse: skilar null fyrir annað en strengi');
  console.assert(reverse('') === '', 'reverse: skilar tómum streng ef strengurinn er tómur');