/**
 * Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.
 * 
 * promise resolves:
 * When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions
 * The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
 * 
 * promise rejects:
 * When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
 * Please solve it without using the built-in Promise.all function.
 */

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let count = 0;
        functions.forEach((fn, idx) => {
            fn()
                .then(val => {
                    results[idx] = val;
                    ++count;
                    if (count == functions.length) resolve(results);
                })
                .catch(reason => reject(reason));
        });
    })
};


const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]

const promise2 = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(5), 200))]);
promise2.then(console.log);

const promise3 = promiseAll([
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
])
promise3.then(console.log);