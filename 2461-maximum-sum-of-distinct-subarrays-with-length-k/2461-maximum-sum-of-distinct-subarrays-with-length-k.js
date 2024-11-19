/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    let n = nums.length;
    if (n < 1 || n > 10 ** 5) return 0;
    if (k < 1 || k > n) return 0;
    let max_sum = 0;
    let current_sum = 0;
    let unique = 0;
    let freq = {};
    // first window
    for (let i = 0; i < k; i++) {
        current_sum += nums[i];
        freq[nums[i]] = ++freq[nums[i]] || 1;
        if (freq[nums[i]] == 1) {
            unique += 1;
        }
    }
    // 1st check sum
    if (unique == k) max_sum = Math.max(max_sum, current_sum)
    // linear loop for sliding
    for (let i = k; i < nums.length; i++) {
        current_sum += nums[i] - nums[i - k];
        freq[nums[i]] = ++freq[nums[i]] || 1;
        if (freq[nums[i]] == 1) unique += 1;
        freq[nums[i - k]] -= 1;
        if (freq[nums[i - k]] == 0) unique -= 1;
        if (unique === k) max_sum = Math.max(max_sum, current_sum)
    }
    return max_sum
};