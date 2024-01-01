/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let arr = arr1.concat(arr2);

  const result = arr.reduce((result, item) => {

    const existItem = result.get(item.id) || {};
    result.set(item.id, { ...existItem, ...item });

    return result;
  }, new Map());    // Map need extra space

  // need .sort() because Map() is unordered
  return Array.from(result.values()).sort((a, b) => a.id - b.id);
};

// much faster than method 1
var join2 = function (arr1, arr2) {
  // object is ordered, do not need extra sorting
  let result = {};

  arr1.forEach((item) => {
    result[item.id] = item;
  });

  arr2.forEach(item => {
    if (result[item.id]) { Object.keys(items).forEach(key => result[item.id][key] = item[key]); }
    else result[item.id] = item;
  });

  return Object.values(result);
}

arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
console.log(join(arr1, arr2));

console.log(join2(arr1, arr2));
