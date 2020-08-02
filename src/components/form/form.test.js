import React from "react";
import { shallow } from "enzyme";

// Component
import Form from "./form.component";

// Helper functions
import findByAttr from "../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Form />);
};

test("renders Form component without any errors", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-form");
});
