/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace } from './lib/helpers.js';
import { consonants } from './lib/consonants.js';
import { longest } from './lib/longest.js';
import { palindrome } from './lib/palindrome.js';
import { reverse } from './lib/reverse.js';
import { shortest } from './lib/shortest.js';
import { vowels } from './lib/vowels.js';

const test = isString('hæ');
console.log('test er strengur?', test);

const stringWithWhitespace = `halló
\theimur
hæ`;
const split = splitOnWhitespace(stringWithWhitespace);
console.log(split);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.string-form');
    const textarea = document.querySelector('#string');
    const output = document.querySelector('.output');
    const longestElement = document.querySelector('.longest');
    const shortestElement = document.querySelector('.shortest');
    const vowelsElement = document.querySelector('.vowels');
    const consonantsElement = document.querySelector('.consonants');
    const palindromeElement = document.querySelector('.palindrome');
    const reversedElement = document.querySelector('.reversed');
    const inputElement = document.querySelector('.input');
    const hreinsaButton = document.querySelector('button[type="reset"]');

    let liveUpdates = false;
  
    function updateAnalysis(text) {
      const longestWord = longest(text);
      const shortestWord = shortest(text);
      const vowelCount = vowels(text); 
      const consonantCount = consonants(text); 
      const isPalindrome = palindrome(text); 
      const reversedText = reverse(text); 
  

      longestElement.textContent = longestWord;
      shortestElement.textContent = shortestWord;
      vowelsElement.textContent = vowelCount;
      consonantsElement.textContent = consonantCount;
      palindromeElement.textContent = isPalindrome ? '' : 'ekki';
      reversedElement.textContent = reversedText;
      inputElement.textContent = text;
  
      output.classList.remove('hidden');
    }
  

    form.addEventListener('submit', (event) => {
      event.preventDefault(); 
      const text = textarea.value.trim(); 
      liveUpdates = true;

      if (text) {
        updateAnalysis(text); 
      }
    });

    hreinsaButton.addEventListener('click', () => {
        liveUpdates = false;
        textarea.value = '';
        output.classList.add('hidden');
    })
  
    textarea.addEventListener('input', () => {
      if (liveUpdates) {
        const text = textarea.value.trim();
      if (text) {
        updateAnalysis(text);
      } else {
        output.classList.add('hidden');
      }
      }
    });
  });