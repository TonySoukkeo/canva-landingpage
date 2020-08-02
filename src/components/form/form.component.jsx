import React from "react";

// Components
import InputGroup from "./input-group/input-group.component";
import Input from "./input/input.component";

const Form = ({ children, ...otherProps }) => {
  return (
    <form data-test="component-form" {...otherProps}>
      {children}
    </form>
  );
};

Form.Input = Input;
Form.InputGroup = InputGroup;

export default Form;
