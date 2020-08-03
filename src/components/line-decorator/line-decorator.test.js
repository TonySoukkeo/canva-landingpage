import React from "react";
import { shallow } from "enzyme";

// Component
import LineDecorator from "./line-decorator.component";

// Helper functions
import findByAttr from "../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<LineDecorator />);
};

test("renders out LineDecorator component without any errors", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-line-decorator");

  expect(component.length).toBe(1);
});
