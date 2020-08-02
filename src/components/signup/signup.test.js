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
