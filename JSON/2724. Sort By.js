/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

let arr = [3, 5, 43, 6, 19, 30];
console.log(arr.sort((a, b) => a - b))

fn = (x) => x
console.log(sortBy(arr, fn));

arr = [{ "x": 1 }, { "x": 0 }, { "x": -1 }]
fn = (d) => d.x
console.log(sortBy(arr, fn))