/**
 * E-mail address validation
 *
 * @param  {string} str Verifiable string
 * @return {boolean}    Return true if there is a match between the regular
 *                      expression and the specified string; otherwise, false.
 */
export default function matchEmail(str) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,8}))$/i.test(str);
}
