const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Checks for valid email address input
 * @function isEmail
 * @param {String} value
 * @return {Boolean}
 */
const isEmail = (value) => {
  console.log("check email", value);
  return emailRegex.test(value);
};

export default isEmail;
