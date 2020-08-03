import styled from "styled-components";

export const Input = styled.input(
  ({ padding, borderColor, width, borderFocusColor, borderRadius, color }) => ({
    padding: padding ? padding : ".7rem",
    borderRadius: borderRadius ? borderRadius : ".3rem",
    borderColor: borderColor ? borderColor : "rgba(14,19,24,.2)",
    outline: "none",
    width: width ? width : "100%",
    "&::placeholder": {
      color: color ? color : "rgba(14,19,24,.2)",
    },
    "&:focus": {
      borderColor: borderFocusColor ? borderFocusColor : "#00c4cc",
    },
  })
);
