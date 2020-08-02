import React from "react";
import { shallow } from "enzyme";

// Component
import Login from "./login.component";

// Helper functions
import findByAttr from "../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Login />);
};

test("renders Login component without any errors", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-login");

  expect(component.length).toBe(1);
});

describe("contains all elements", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("contains log in with Google button", () => {
    const googleLogInBtn = findByAttr(wrapper, "google-login");
    expect(googleLogInBtn.length).toBe(1);
  });

  test("contains log in with Facebook button", () => {
    const facebookLogInBtn = findByAttr(wrapper, "facebook-login");

    expect(facebookLogInBtn.length).toBe(1);
  });

  test("contains log in with Apple button", () => {
    const appleLogInBtn = findByAttr(wrapper, "apple-login");

    expect(appleLogInBtn.length).toBe(1);
  });

  test("contains form element", () => {
    const form = findByAttr(wrapper, "component-form");
    expect(form.length).toBe(1);
  });

  test("contains text input for 'Email or Cell'", () => {
    const emailOrCellInput = findByAttr(wrapper, "email-or-cell-input");

    expect(emailOrCellInput.length).toBe(1);
  });

  test("contans password text input", () => {
    const passwordInput = findByAttr(wrapper, "password-input");

    expect(passwordInput.length).toBe(1);
  });

  test("contains log in button", () => {
    const loginButton = findByAttr(wrapper, "login-button");

    expect(loginButton.length).toBe(1);
  });

  test("contains 'forgot password' link", () => {
    const forgotPasswordLink = findByAttr(wrapper, "forgot-password-link");

    expect(forgotPasswordLink.length).toBe(1);
  });

  test("contains 'sign up' link", () => {
    const signupLink = findByAttr(wrapper, "signup-link");

    expect(signupLink.length).toBe(1);
  });
});
