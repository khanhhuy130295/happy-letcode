/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
       if (s.length < 0 || s.length > 15) return 0;
    let roman_values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        CM: 900,
        M: 1000,
    };
    let result = 0;
    let pre_val = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let value = roman_values[s[i]];
        if (value < pre_val) {
            result -= value;
        } else {
            result += value;
        }
        pre_val = value;
    }
    return result;
};