/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    if (k == 0) return Array(code.length).fill(0);
    let result = [];
    let n = code.length;
    for (let i = 0; i < code.length; i++) {
        let temp = 0;
        if (k > 0) {
            for (let z = 1; z <= k; z++) {
                temp += code[(i + z) %n]
            }
        } else {
            for (let z = 1; z <= -k; z++) {
                temp += code[(i - z + n) %n]
            }
        }
        result.push(temp)
    }
    return result;
};