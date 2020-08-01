import React from "react";
import { shallow } from "enzyme";

// Component
import App from "./App";
import Navigation from "./components/navigation/navigation.component";
import GettingStarted from "./components/getting-started/getting-started.component";

// Helper functions
import findByAttr from "./util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

test("renders App component without error", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-app");

  expect(component.length).toBe(1);
});

describe("App component has correct components inside of it", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("contains Navigation component", () => {
    expect(wrapper.contains(<Navigation />)).toBe(true);
  });

  test("contains GettingStarted component", () => {
    expect(wrapper.contains(<GettingStarted />)).toBe(true);
  });
});
