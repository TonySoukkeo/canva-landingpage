import React from "react";
import { shallow } from "enzyme";

// Component
import Signup from "./signup.component";

// Helper functions
import findByAttr from "../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Signup />);
};

test("renders Signup component without any errors", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-signup");

  expect(component.length).toBe(1);
});

describe("has all containing elements", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("contains header", () => {
    const header = findByAttr(wrapper, "component-header").dive();

    expect(header.text().length).not.toBe(0);
  });

  test("contains form element", () => {
    const form = findByAttr(wrapper, "component-form");

    expect(form.length).toBe(1);
  });

  test("contains name text input field", () => {
    const nameInput = findByAttr(wrapper, "name-input");

    expect(nameInput.length).toBe(1);
  });

  test("contains email text input", () => {
    const emailInput = findByAttr(wrapper, "email-input");

    expect(emailInput.length).toBe(1);
  });

  test("contains password input field", () => {
    const passwordInput = findByAttr(wrapper, "password-input");

    expect(passwordInput.length).toBe(1);
  });

  test("contains button for signing up", () => {
    const signupButton = findByAttr(wrapper, "signup-button");

    expect(signupButton.length).toBe(1);
  });

  test("contains login link", () => {
    const loginLink = findByAttr(wrapper, "login-link");

    expect(loginLink.length).toBe(1);
  });
});

describe("test input elements", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("'name' input field has type of text", () => {
    const nameInput = findByAttr(wrapper, "name-input");

    expect(nameInput.props().type).toBe("text");
  });

  test("'Email' input field has type of email", () => {
    const emailInput = findByAttr(wrapper, "email-input");

    expect(emailInput.props().type).toBe("email");
  });

  test("'password' input field has type of password", () => {
    const passwordField = findByAttr(wrapper, "password-input");

    expect(passwordField.props().type).toBe("password");
  });
});
