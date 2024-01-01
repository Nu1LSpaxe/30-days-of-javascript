/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // return null if obj is null
    if (obj === null) return null;   

    // filter out falsy value, then use map() to recursive each element from the result of filter
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject); 

    // return if not object(it will be other type if it's already innermost)
    if (typeof obj !== 'object') return obj;    

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