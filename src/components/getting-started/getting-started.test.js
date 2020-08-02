import React from "react";
import { shallow } from "enzyme";

// Component
import GettingStarted from "./getting-started.component";

// Helper functions
import findByAttr from "../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<GettingStarted />);
};

test("renders out GettingStarted component without any issues", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-getting-started");

  expect(component.length).toBe(1);
});

test("contains header", () => {
  const wrapper = setup();

  const header = findByAttr(wrapper, "component-header").dive();

  expect(header.text().length).not.toBe(0);
});

describe("contains necessary CTA buttons", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });
  test("has a sign up with Google button", () => {
    const googleBtn = findByAttr(wrapper, "google-signup-btn");

    expect(googleBtn.length).toBe(1);
  });

  test("has a sign up with Facebook button", () => {
    const facebookBtn = findByAttr(wrapper, "facebook-signup-btn");

    expect(facebookBtn.length).toBe(1);
  });

  test("has a sign up with email button", () => {
    const emailSignup = findByAttr(wrapper, "email-signup-btn");

    expect(emailSignup.length).toBe(1);
  });

  test("has a login button", () => {
    const loginBtn = findByAttr(wrapper, "login-btn");

    expect(loginBtn.length).toBe(1);
  });
});
