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
const setup = () => {
  return shallow(<Input />);
};

test("renders out Input component without any errors", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-input");

  expect(component.length).toBe(1);
});
