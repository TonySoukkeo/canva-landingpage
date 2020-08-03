import styled from "styled-components";

export const Link = styled.button(({ color, fontWeight, hoverColor }) => ({
  cursor: "pointer",
  color: color ? color : "rgba(14,19,24,.7)",
  textDecoration: "underline",
  fontWeight: fontWeight ? fontWeight : 400,
  animation: "all .2s ease-in",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  ":hover": {
    color: hoverColor ? hoverColor : "#00c4cc",
  },
}));
