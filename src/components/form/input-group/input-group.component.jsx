import React from "react";

const InputGroup = ({ children, ...otherProps }) => {
  return (
    <div data-test="component-input-group" {...otherProps}>
      {children}
    </div>
  );
};

export default InputGroup;
