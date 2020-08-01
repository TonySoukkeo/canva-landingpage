/**
 * Runs multiple functions in sequence
 * @function funFnsInSequence
 * @param  {...Function} fns - array of functions that will be ran one after another
 * @param {...any} args - Any type of arguments function may have
 * @return {undefined}
 */
const runFnsInSequence = (...fns) => (...args) => {
  fns.forEach((fn) => fn && fn(...args));
};

export default runFnsInSequence;
