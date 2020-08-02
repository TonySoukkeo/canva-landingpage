import React from "react";

const Form = ({ children, ...otherProps }) => {
  return (
    <form data-test="component-form" {...otherProps}>
      {children}
    </form>
  );
};

export default Form;
