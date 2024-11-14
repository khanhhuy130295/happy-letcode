/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };

  for (const char of s) {
    if (map[char]) {
      const topElement = stack.pop();
      if (topElement !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;   

};