import React from "react";
import { shallow } from "enzyme";

// Component
import Card from "./card.component";

// Helper functions
import findByAttr from "../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Card />);
};

test("renders card component without errors", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-card");

  expect(component.length).toBe(1);
});
