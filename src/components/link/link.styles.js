import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)(({ hoverColor, ...otherProps }) => ({
  cursor: "pointer",
  color: "rgba(14,19,24,.7)",
  textDecoration: "underline",
  fontWeight: 400,
  animation: "all .2s ease-in",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  ":hover": {
    color: hoverColor ? hoverColor : "#00c4cc",
  },
  ...otherProps,
}));
