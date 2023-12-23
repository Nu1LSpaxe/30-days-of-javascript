/**
 * Given a function fn, return a memoized version of that function.
 *
 * A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
 *
 * You can assume there are 3 possible input functions: sum, fib, and factorial.
 *
 * sum accepts two integers a and b and returns a + b.
 * fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
 * factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 */

/**
 * Compare call(), apply(), and apply():
 *
 * call - Directly invokes the function, passing arguments individually. Usually is fastest.
 * apply - Invokes the function, passing arguments as an array. Slightly slower than call due to array handling and spreading arguments.
 * bind - Returns a new bound function that needs to be invoked separately. Slowest of the three because it involves function creation.
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const map = new Map(); // const map = {};
  return function (...args) {
    let key = JSON.stringify(args); // transfer to JSON type as key directly
    if (key in map) return map[key];
    // map[key] = fn.apply(this, args);
    // .bind() -> return Function, so need to add '()' after call bind()
    // map[key] = fn.bind(this, ...args)();
    map[key] = fn.call(this, ...args); // use input as key to store value
    return map[key];
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
