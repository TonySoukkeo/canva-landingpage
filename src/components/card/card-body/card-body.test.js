import React from "react";
import { shallow } from "enzyme";

// Component
import CardBody from "./card-body.component";

// Helper functions
import findBytAttr from "../../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<CardBody />);
};

test("renders CardBody component without error", () => {
  const wrapper = setup();
  const component = findBytAttr(wrapper, "component-card-body");

  expect(component.length).toBe(1);
});
