import React from "react";
import { shallow } from "enzyme";

// Component
import StartFlow from "./start-flow.component";
import GettingStarted from "../getting-started/getting-started.component";
import Login from "../login/login.component";
import Signup from "../signup/signup.component";

// Helper function
import findByAttr from "../../util/findByAtrr";
import checkPropTypes from "../../util/checkPropTypes";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = (props = { display: "default" }) => {
  return shallow(<StartFlow {...props} />);
};

test("renders start-flow component without any errors", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-start-flow");

  expect(component.length).toBe(1);
});

describe("renders out correct displays", () => {
  test("renders out GettingStarted component if display props is 'default'", () => {
    const wrapper = setup();
    expect(wrapper.contains(<GettingStarted />)).toBe(true);
  });

  test("renders out Login component if display props is 'login'", () => {
    const wrapper = setup({ display: "login" });
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  test("renders out Signup component if display props is 'signup'", () => {
    const wrapper = setup({ display: "signup" });
    expect(wrapper.contains(<Signup />)).toBe(true);
  });
});

test("does not throw warning with expectedProps", () => {
  const expectedProps = { display: "default" };
  checkPropTypes(StartFlow, expectedProps);
});
