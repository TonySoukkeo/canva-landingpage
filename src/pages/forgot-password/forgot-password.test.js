import React from "react";
import { shallow } from "enzyme";

// Component
import ForgotPassword from "./forgot-password.component";

// Helper functions
import findByAttr from "../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<ForgotPassword />);
};

test("renders ForgotPassword component without any errors", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-forgot-password");

  expect(component.length).toBe(1);
});

describe("contains correct elements", () => {
  let wrapper = setup();

  beforeEach(() => {
    wrapper = setup();
  });

  test("has a header", () => {
    const headerComponent = findByAttr(wrapper, "component-header");

    expect(headerComponent.length).toBe(1);
  });

  test("has a text body for instructions to reset", () => {
    const bodyComponent = findByAttr(wrapper, "component-body");

    expect(bodyComponent.length).toBe(1);
  });

  test("has an input field to enter in your email or cell", () => {
    const inputComponent = findByAttr(wrapper, "component-input");

    expect(inputComponent.length).toBe(1);
  });

  test("has a button to submit your input", () => {
    const buttonComponent = findByAttr(wrapper, "component-button");

    expect(buttonComponent.length).toBe(1);
  });

  test("has a button to take you back to the login", () => {
    const backButton = findByAttr(wrapper, "back-button");

    expect(backButton.length).toBe(1);
  });

  test("has a form field", () => {
    const formComponent = findByAttr(wrapper, "component-form");

    expect(formComponent.length).toBe(1);
  });
});
