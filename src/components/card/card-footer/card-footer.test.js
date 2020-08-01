import React from "react";
import { shallow } from "enzyme";

// Component
import CardFooter from "./card-footer.component";

// Helper functions
import findByAttr from "../../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<CardFooter />);
};

test("renders card component without errors", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-card-footer");

  expect(component.length).toBe(1);
});
