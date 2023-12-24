/**
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
 * The fn function takes one or two arguments:
 * 
 * arr[i] - number from the arr
 * i - index of arr[i]
 * filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
 * Please solve it without the built-in Array.filter method.
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// it's quite strightforward right?
var filter1 = function(arr, fn) {
    let newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// flatMap() also a pretty clear funciton, combine flat() and map() together
var filter2 = function(arr, fn) {
    return arr.flatMap((x, i) => fn(x, i) ? [x] : []);
};

