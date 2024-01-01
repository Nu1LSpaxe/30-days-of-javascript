/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    
    return result;
};

let arr = [];
for (let i = 0; i < 10; i++) arr.push(i);
console.log(chunk(arr, 3));

// _.chunk() is Lodash function
const _ = require('lodash');
console.log(_.chunk(arr, 3));