import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// Mixins
const button = css(
  ({
    disabled,
    backgroundColor = "transparent",
    color = "#fff",
    ...otherProps
  }) => ({
    cursor: disabled ? "not-allowed" : "pointer",
    borderWidth: "1px",
    borderStyle: "solid",
    backgroundColor: disabled ? "rgba(14,19,24,.15)" : backgroundColor,
    padding: "0.3rem 1rem",
    borderRadius: ".3rem",
    minHeight: "45px",
    outline: "none",
    color: disabled ? "rgba(14,19,24,.45)" : color,
    ...otherProps,
  })
);

// Custom styled components

export const ButtonLink = styled(Link)`
  ${button}
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const ButtonText = styled.div`
  flex: 1;
  text-align: center;
`;

export const Button = styled.button`
  ${button}
`;

export const ActionButton = styled(Button)(
  ({ hoverColor, hoverBgColor, hoverBorderColor, ...otherProps }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    color: "rgba(14, 19, 24, 0.7)",
    borderColor: "rgba(14, 19, 24, 0.15)",
    transition: "all 0.1s ease-in",
    fontWeight: 400,
    width: "100%",
    "&:hover": {
      borderColor: hoverBorderColor ? hoverBorderColor : "#333",
      backgroundColor: hoverBgColor ? hoverBgColor : "inherit",
      color: hoverColor ? hoverColor : "inherit",
    },
    ...otherProps,
  })
);
