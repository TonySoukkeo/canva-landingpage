import React from "react";

const Input = ({ placeholder = "enter text here", ...otherProps }) => {
  return <input placeholder={placeholder} {...otherProps} />;
};

export default Input;
