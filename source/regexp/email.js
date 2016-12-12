/**
 * E-mail address validation
 *
 * @param  {string} str Verifiable string
 * @return {boolean}    Return true if there is a match between the regular
 *                      expression and the specified string; otherwise, false.
 */
export default function matchEmail(str) {
    return /[a-z0-9._%+-]@[a-z0-9-]+.+.[a-z]{2,6}/i.test(str);
}
