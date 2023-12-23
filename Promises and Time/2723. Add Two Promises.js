/**
 * Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 */

/**
 * async/await vs Promise
 * 
 * async: return Promise
 * await: wait for Promise (in async function)
 * new Promise = (resolve, reject) => {
 *      define function resolve() -> for .then() if succeed
 *      define function reject() -> for .catch() if failed
 * }
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // return (await Promise.all([promise1, promise2])).reduce((a, b) => a + b, 0);
    return await promise1 + await promise2;
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4

