/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
    const n = s.length;
    const count = { a: 0, b: 0, c: 0 };

    // Count the occurrences of each character
    for (const char of s) {
        count[char]++;
    }

    // Early return if any character count is less than k
    if (count.a < k || count.b < k || count.c < k) {
        return -1;
    }

    let minutes = 0;
    let right = 0;
    let remain_count = { a: count.a - k, b: count.b - k, c: count.c - k };
    for (let left = 0; left < n; left++) {
        if (s[left] === 'a') remain_count.a--;
        if (s[left] === 'b') remain_count.b--;
        if (s[left] === 'c') remain_count.c--;

        while (remain_count.a < 0 || remain_count.b < 0 || remain_count.c < 0) {
            if (s[right] === 'a') remain_count.a++;
            if (s[right] === 'b') remain_count.b++;
            if (s[right] === 'c') remain_count.c++;
            right++;
        }
        minutes = Math.max(minutes, left - right + 1);
    }

    return n - minutes;

};