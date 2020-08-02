import React from "react";

const Input = ({ placeholder = "enter text here", ...otherProps }) => {
  return (
    <input
      data-test="component-input"
      placeholder={placeholder}
      {...otherProps}
    />
  );
};

export default Input;
