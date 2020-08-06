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

describe("submit button gets disabled for invalid values", () => {
  let wrapper;
  let nameInput;
  let emailInput;
  let passwordInput;
  let nameTargetEvt;
  let emailTargetEvt;
  let passwordTargetEvt;

  beforeEach(() => {
    wrapper = setup();

    nameInput = findByAttr(wrapper, "name-input");
    emailInput = findByAttr(wrapper, "email-input");
    passwordInput = findByAttr(wrapper, "password-input");

    nameTargetEvt = {
      target: {
        value: "testing",
        name: "name",
        focused: true,
      },
    };

    emailTargetEvt = {
      target: {
        value: "test@test.com",
        name: "email",
        focused: true,
      },
    };

    passwordTargetEvt = {
      target: {
        value: "testing123",
        name: "password",
        focused: true,
      },
    };
  });

  test("button is disabled if 'name', 'email', and 'password' field are invalid", () => {
    const button = findByAttr(wrapper, "signup-button");

    expect(button.prop("disabled")).toBe(true);
  });

  test("button is disabled if 'name' value is empty", () => {
    nameInput.simulate("change", nameTargetEvt);

    const signupButton = findByAttr(wrapper, "signup-button");

    expect(signupButton.prop("disabled")).toBe(true);
  });

  test("button is disabled if 'email' value is invalid", () => {
    emailInput.simulate("change", emailTargetEvt);

    const signupButton = findByAttr(wrapper, "signup-button");

    expect(signupButton.prop("disabled")).toBe(true);
  });

  test("button is disabled if 'password' value is invalid", () => {
    passwordInput.simulate("change", passwordTargetEvt);

    const signupButton = findByAttr(wrapper, "signup-button");

    expect(signupButton.prop("disabled")).toBe(true);
  });

  test("button is not disabled if all values are valid", () => {
    nameInput.simulate("change", nameTargetEvt);
    emailInput.simulate("change", emailTargetEvt);
    passwordInput.simulate("change", passwordTargetEvt);

    const signupButton = findByAttr(wrapper, "signup-button");

    expect(signupButton.prop("disabled")).toBe(false);
  });
});
