/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
}

obj = {"x": 5, "y": 42};
console.log(isEmpty(obj));

obj2 = [];
console.log(isEmpty(obj2));
