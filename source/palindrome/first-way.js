/**
 * Check whether a string is a palindrome
 *
 * @param  {string} str The tested string
 * @return {boolean}    If the string is a palindrome return true, otherwise
 *                      false
 */
export default function palindrome(str) {
    str = str.toLowerCase().replace(/[^\w]/g, '');
    return str === str.split('').reverse().join('');
}
