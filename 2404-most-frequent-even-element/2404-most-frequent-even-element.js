/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    // step1: check nums  1 <= nums.length <= 2000
    if (nums.length === 0 || nums.length > 2000) return -1
    // step2: define object contain value of array
    let frequency_element = {}
    let smallest = -1
    let the_most = 0
    // step3: loop nums - assigment value counter object
    for (let i = 0; i < nums.length; i++) {
        frequency_element[nums[i]] = (frequency_element[nums[i]] || 0) + 1
    }
    // step4: compare object and return smallest number
    for (let key in frequency_element) {
        if (frequency_element[key] > the_most &&  Number(key) % 2 === 0) {
            the_most = frequency_element[key];
            smallest = Number(key)
            
        }
    }
    // step5: at the end return number
    return smallest
};


