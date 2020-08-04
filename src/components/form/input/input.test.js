import React from "react";
import { shallow } from "enzyme";

// Component
import Input from "./input.component";

// Helper functions
import findByAttr from "../../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = (props) => {
  return shallow(<Input {...props} />);
};

test("renders Input compoennt without any errors", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-input");

  expect(component.length).toBe(1);
});

describe("displays invalid message correctly", () => {
  const getInvalidText = (wrapper) => {
    return findByAttr(wrapper, "invalid-text");
  };

  test("renders out invalid text if 'valid' prop is false, 'focused' prop is true, and invalidText isnt empty", () => {
    const props = {
      valid: false,
      focused: true,
      invalidText: "enter your information",
    };

    const wrapper = setup(props);
    const invalidText = getInvalidText(wrapper);

    expect(invalidText.length).toBe(1);
  });

  test("does not render invalid text if 'valid' prop is true and 'focused' prop is true", () => {
    const props = {
      valid: true,
      focused: true,
      invalidText: "etner your information",
    };
    const wrapper = setup(props);

    const invalidText = getInvalidText(wrapper);

    expect(invalidText.length).toBe(0);
  });

  test("does not render invalid text if 'focused' prop is false", () => {
    const props = { focused: false, valid: false, invalidText: "some stuff" };
    const wrapper = setup(props);

    const invalidText = getInvalidText(wrapper);

    expect(invalidText.length).toBe(0);
  });

  test("renders out correct text if input is not valid", () => {
    const text = "Enter your info";
    const props = { focused: true, valid: false, invalidText: text };

    const wrapper = setup(props);
    const invalidText = getInvalidText(wrapper);
    expect(invalidText.text()).toBe(text);
  });
});
