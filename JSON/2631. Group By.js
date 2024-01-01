/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((result, item) => {
        
        // use fn(item) as key
        const key = fn(item);   
        
        // push(item) if already contains, otherwise new an array contains item (noticeable: [item] has an [] outside to contain item, make it as an array, then we can use method 'push')
        result.hasOwnProperty(key)? result[key].push(item) : result[key] = [item];  

        // use return to update result for each iteration
        return result; 
    }, {})
};


let arr = [1, 2, 3, 5, 5];

console.log(arr.groupBy(String));

let _ = require('lodash');
console.log(_.groupBy(arr))