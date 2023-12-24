/** 
 * Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
 * 
 * You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
 */

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (obj === null) return null;   // return null if obj is null
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject); // filter out falsy value, then use map() to recursive each element from the result of filter
    if (typeof obj !== 'object') return obj;    // return if not object(it will be other type if it's already innermost)

    // Case if it's object
    let compacted = {};
    for (const key in obj) {
        let value = compactObject(obj[key]);
        if (value) compacted[key] = value;
    }

    return compacted;
};

obj = [null, 0, false, 1]   // [1]
console.log(compactObject(obj));
obj = {"a": null, "b": [false, 1]}  // {"b": [1]}
console.log(compactObject(obj));
obj = [null, 0, 5, [0], [false, 16]]    // [5, [], [16]]
console.log(compactObject(obj));