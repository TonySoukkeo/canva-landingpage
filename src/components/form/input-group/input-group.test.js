import React from "react";
import { shallow } from "enzyme";

// Component
import InputGroup from "./input-group.component";

// Helper functions
import findByAttr from "../../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<InputGroup />);
};

test("renders InputGroup component without any errors", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-input-group");

  expect(component.length).toBe(1);
});
