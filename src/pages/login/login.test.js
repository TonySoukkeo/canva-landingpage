import React from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

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
  return shallow(
    <MemoryRouter initialEntries={["/login"]}>
      <Login />
    </MemoryRouter>
  );
};

test("renders Login component without any errors", () => {
  const wrapper = setup();

  console.log("wrapper", wrapper.find(Login).dive().debug());
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

describe("tests input elements", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("contains header", () => {
    const header = findByAttr(wrapper, "component-header").dive();

    expect(header.text().length).not.toBe(0);
  });

  test("'Email or cell' input field has type of text", () => {
    const inputField = findByAttr(wrapper, "email-or-cell-input");

    expect(inputField.props().type).toBe("text");
  });

  test("'password' input field has type of password", () => {
    const passwordField = findByAttr(wrapper, "password-input");

    expect(passwordField.props().type).toBe("password");
  });

  test("'Email or Cell' input value updates correctly on 'onChange'", () => {
    let input;
    const inputValue = "test@gmail.com";
    const inputName = "emailOrCell";

    input = findByAttr(wrapper, "email-or-cell-input");
    input.simulate("change", {
      target: {
        name: inputName,
        value: inputValue,
      },
    });
    input = findByAttr(wrapper, "email-or-cell-input");

    expect(input.props().value).toBe(inputValue);
  });

  test("'Password' input value updates correctly on 'onChange'", () => {
    let input;
    const inputValue = "password123";
    const inputName = "password";

    input = findByAttr(wrapper, "password-input");
    input.simulate("change", {
      target: {
        name: inputName,
        value: inputValue,
      },
    });
    input = findByAttr(wrapper, "password-input");

    expect(input.props().value).toBe(inputValue);
  });
});
