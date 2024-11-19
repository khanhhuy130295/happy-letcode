/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle = Math.floor((left + right) / 2);


    while (left <= right && nums[middle] != target) {
        if (nums[middle] < target) { left = middle + 1; }
        else right = middle - 1;

        middle = Math.floor((left + right) / 2)
    }
    return nums[middle] === target ? middle : -1;
};