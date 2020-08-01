import React from "react";
import { shallow } from "enzyme";

// Component
import Navigation from "./navigation.component";

// Helper function
import findByAttr from "../../util/findByAtrr";

/**
 * initial setup for ShallowWrapper
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Navigation />);
};

describe("main navigation component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders out navigation component without errors", () => {
    const component = findByAttr(wrapper, "main-navigation");

    expect(component.length).toBe(1);
  });

  test("contains a logo", () => {
    const logo = findByAttr(wrapper, "main-logo");
    expect(logo.length).toBe(1);
  });

  test("contains a Log in button", () => {
    const loginBtn = findByAttr(wrapper, "log-in-btn");

    expect(loginBtn.length).toBe(1);
  });

  test("contains a Signup button", () => {
    const signUpBtn = findByAttr(wrapper, "sign-up-btn");

    expect(signUpBtn.length).toBe(1);
  });

  // Test for correct links
  describe("main navigation has correct links", () => {
    test(`contains "Home" link`, () => {
      const homeLink = findByAttr(wrapper, "home-link");
      expect(homeLink.length).toBe(1);
    });

    test(`contains "Templates" link`, () => {
      const templatesLink = findByAttr(wrapper, "templates-link");
      expect(templatesLink.length).toBe(1);
    });

    test(`contains "Discover" link`, () => {
      const discoverLink = findByAttr(wrapper, "discover-link");
      expect(discoverLink.length).toBe(1);
    });

    test(`contains "Learn" link`, () => {
      const learnLink = findByAttr(wrapper, "learn-link");
      expect(learnLink.length).toBe(1);
    });

    test(`contains "Pricing" link`, () => {
      const pricingLink = findByAttr(wrapper, "pricing-link");
      expect(pricingLink.length).toBe(1);
    });
  });
});
