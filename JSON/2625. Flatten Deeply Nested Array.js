/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

// Time Limit Exceeded
var flat = function (arr, n) {
    for (let i = 0; i < n; i++) arr = arr.flatMap(x => Array.isArray(x) ? [...x] : [x]);
    return arr;
};

// recursion
var flat2 = function (arr, n) {
    if (n === 0) return arr;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (n > 0 && Array.isArray(arr[i])) result.push(...flat2(arr[i], n-1));
        else result.push(arr[i]);
    }
    return result;
};

arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 0
// expected: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
console.log(flat2(arr, n))

arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 1
// expected: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
console.log(flat2(arr, n))

arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 2
// expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(flat2(arr, n))