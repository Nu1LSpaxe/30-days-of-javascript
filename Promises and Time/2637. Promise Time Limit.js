/**
 * Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
 * 
 * The time limited function should follow these rules:
 * - If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
 * - If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        // Way 1: just Promise
        // In below case, there are two reasons to cause reject():
        // one is .catch(reject), while another is setTimeout(reject, t)
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => reject('Time Limit Exceeded'), t);
        //     fn(...args).then(resolve).catch(reject);
        // })
        // Way 2: Promise.race([success, fail]): used to select which one is faster
        const success = new Promise(resolve => resolve(fn(...args)));
        const fail = new Promise((_, reject) => setTimeout(() => reject('Time Limit Exceeded'), t))
        return Promise.race([success, fail]);
    }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms