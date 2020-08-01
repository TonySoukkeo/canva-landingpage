import React from "react";
import { shallow } from "enzyme";

// Component
import CardHeader from "./card-header.component";

// Helper functions
import findByAttr from "../../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<CardHeader />);
};

test("renders card component without errors", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-card-header");

  expect(component.length).toBe(1);
});
