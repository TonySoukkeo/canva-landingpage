import React from "react";
import { shallow } from "enzyme";

// Component
import GoogleButton from "./google-button.component";
import findByAttr from "../../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  const props = {
    placeholder: "sign up",
  };
  return shallow(<GoogleButton {...props} />);
};

describe("checks for containing elements", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("contains icon", () => {
    const icon = findByAttr(wrapper, "google-icon");
    expect(icon.length).toBe(1);
  });

  test("contains placeholder text", () => {
    const placeholder = findByAttr(wrapper, "placeholder");
    expect(placeholder.length).toBe(1);
  });
});
