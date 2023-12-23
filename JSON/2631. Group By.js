/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((result, item) => {
        const key = fn(item);   // use fn(item) as key
        result.hasOwnProperty(key)? result[key].push(item) : result[key] = [item];  // push(item) if already contains, otherwise new an array contains item (noticeable: [item] has an [] outside to contain item, make it as an array, then we can use method 'push')
        return result;  // use return to update result for each iteration
    }, {})
};


let arr = [1, 2, 3, 5, 5];

console.log(arr.groupBy(String));

let _ = require('lodash');
console.log(_.groupBy(arr))