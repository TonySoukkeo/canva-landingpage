import React from "react";
import { shallow } from "enzyme";

// Component
import Link from "./link.component";

// Helper functions
import findByAttr from "../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Link />);
};

test("renders Link component without any errors", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-link");

  expect(component.length).toBe(1);
});
