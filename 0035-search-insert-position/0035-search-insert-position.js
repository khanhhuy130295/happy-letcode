/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.length < 0 || nums.length > 100000) return -1;
    if (target < -100000 || target > 100000) return -1;
    let left = 0;
    let right = nums.length - 1;
    let middle = Math.floor((left +  right) /  2);

    while(left <= right && nums[middle] !==  target){
        
        if(nums[middle] > target) right = middle - 1;
        else left = middle + 1;
        
        middle  = Math.floor((left + right) / 2)
    }
    return nums[middle] == target ? middle : left;
};