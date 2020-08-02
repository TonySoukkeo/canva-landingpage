import React from "react";
import { shallow } from "enzyme";

// Component
import StartFlow from "./start-flow.component";

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
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders out 'default display' if display props is 'default'", () => {
    const component = findByAttr(wrapper, "component-default-display");

    expect(component.length).toBe(1);
  });

  test("renders out 'login display' if display props is 'login'", () => {
    const wrapper = setup({ display: "login" });
    const component = findByAttr(wrapper, "component-login-display");

    expect(component.length).toBe(1);
  });

  test("renders out 'signup display' if display props is 'signup'", () => {
    const wrapper = setup({ display: "signup" });
    const component = findByAttr(wrapper, "component-signup-display");

    expect(component.length).toBe(1);
  });
});

test("does not throw warning with expectedProps", () => {
  const expectedProps = { display: "default" };
  checkPropTypes(StartFlow, expectedProps);
});
