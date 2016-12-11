/**
 * Check whether a string is a palindrome
 *
 * @param  {string} str The tested string
 * @return {boolean}    If the string is a palindrome return true, otherwise
 *                      false
 */
export default function palindrome(str) {
    str = str.toLowerCase().replace(/[^\w]/g, '');

    for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }

    return true;
}
