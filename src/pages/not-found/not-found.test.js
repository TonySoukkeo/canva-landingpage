import React from "react";
import { shallow } from "enzyme";

// Component
import NotFound from "./not-found.component";

// Helper Functions
import findByAttr from "../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<NotFound />);
};

test("renders NotFound component without any errors", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-not-found");

  expect(component.length).toBe(1);
});

test("has a link that takes you back to the homepage", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "back-link");

  expect(component.length).toBe(1);
});
