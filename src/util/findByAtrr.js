/***
 * Finds a node by attr on a Enzyme Wrapper
 * @function findByAttr
 * @param {ShallowWrapper} wrapper - shallow wrapper from enzyme
 * @param {string} attr - attribute of selector to be found eg) --> [data-test="some-component"]
 * @return {ShallowWrapper}
 */
export default (wrapper, attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
};
