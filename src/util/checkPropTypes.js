import checkPropTypes from "check-prop-types";

export default (component, props) => {
  const propError = checkPropTypes(
    component.propTypes,
    props,
    "prop",
    component.name
  );

  expect(propError).toBe(undefined);
};
