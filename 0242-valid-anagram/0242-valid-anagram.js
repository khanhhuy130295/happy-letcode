/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (str1, str2) {
  if(str1.length !== str2.length) return false;
    if(Number.isInteger(str1) || Number.isInteger(str2)) return false
    const strObj1 = {};
    const strObj2 = {};
    let str1_lowcase =  String(str1).toLowerCase()
    let str2_lowcase =  str2.toLowerCase()
    for(let val of str1_lowcase){
        strObj1[val] = ++strObj1[val] || 1
    }
    for(let val of str2_lowcase){
        strObj2[val] = ++strObj2[val] || 1
    }  
    
    for(let val in strObj1){
        if(!strObj2[val]) return false;
        if(strObj1[val] !== strObj2[val]) return false
    }
    return true;
};