import styled from "styled-components";

export const Button = styled.button(({ ...otherProps }) => ({
  cursor: "pointer",
  borderWidth: "1px",
  borderStyle: "solid",
  backgroundColor: "transparent",
  padding: "0.3rem 1rem",
  borderRadius: ".3rem",
  minHeight: "45px",
  outline: "none",
  ...otherProps,
}));

export const ButtonText = styled.div`
  flex: 1;
  text-align: center;
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
