import styled from "styled-components";

const styleColors = {
  invalid: "#f84856",
  valid: "green",
};

export const Input = styled.input(
  ({
    borderFocusColor = "#00c4cc",
    borderColor = "rgba(14,19,24,.2)",
    borderInvalid = styleColors.invalid,
    borderValid = "green",
    focused,
    valid,
    ...otherProps
  }) => ({
    padding: ".7rem",
    borderRadius: ".3rem",
    borderColor: !focused
      ? borderColor
      : focused && !valid
      ? borderInvalid
      : borderValid,
    outline: "none",
    width: "100%",
    "&::placeholder": {
      color: "rgba(14,19,24,.2)",
    },
    "&:focus": {
      borderColor: !focused
        ? borderFocusColor
        : focused && !valid
        ? borderInvalid
        : borderValid,
    },
    ...otherProps,
  })
);

export const InvalidText = styled.p((...otherProps) => ({
  color: styleColors.invalid,
  fontWeight: 400,
  fontSize: ".8rem",
  lineHeight: 1.6,
  marginTop: ".2rem",
  ...otherProps,
}));
