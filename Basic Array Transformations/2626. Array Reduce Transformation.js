/**
 * Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
 * A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = f(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.
 * 
 * If the length of the array is 0, it should return init.
 * Please solve it without using the built-in Array.reduce method.
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

// reduce() is used to 'do something' to 'initial value', return the result after this process.
// reduce((accumulator, current) => 'do sth function', initial_value);
var reduce = function(nums, fn, init) {
    let curr = init;
    for (var i = 0; i < nums.length; i++) {
        curr = fn(curr, nums[i]);
    }
    return curr;
};

// reduceRight() -> just from the rightest place start reduce()
var reduce2 = function(nums, fn, init) {
    return nums.reverse().reduceRight((accum, curr) => fn(accum, curr), init);
};