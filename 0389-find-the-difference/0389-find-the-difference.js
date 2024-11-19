/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    if (s.length < 0 || s.length > 1000) return "";
    if (t.length < 1 || t.length > s.length + 1) return "";
    let obj = new Map();
    for (let i = 0; i < s.length; i++) {
        obj.set(s[i], obj.get(s[i]) + 1 || 1);
    }
    for (let i = 0; i < t.length; i++) {
        if (!obj.has(t[i])) return t[i];
        obj.set(t[i], obj.get(t[i]) - 1);
    }
    for(let [key, value] of obj){
        if(value !== 0) return key
    }
    return "";
};