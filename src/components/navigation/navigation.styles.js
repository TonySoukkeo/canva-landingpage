import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0.5rem 2.5rem;
  margin-bottom: 3rem;
  height: 5rem;
`;

export const Nav = styled.nav`
  margin-left: 1.5rem;
  height: 100%;
`;

export const List = styled.ul`
  display: flex;
  height: 100%;
`;

export const ListItem = styled.li(({ active }) => ({
  position: "relative",
  display: "flex",
  cursor: "pointer",
  listStyleType: "none",
  fontSize: "0.9rem",
  fontWeight: active ? "bold" : 400,
  padding: "0 1rem",
  color: "#fff",
  alignItems: "center",
  transition: "all 0.1s ease-in",

  "&::before": {
    content: active ? "''" : "",
    position: "absolute",
    top: "-.5rem",
    left: "50%",
    transform: "translateX(-50%)",
    width: "2.3rem",
    height: ".3rem",
    borderRadius: "1rem",
    background: "#00c4cc",
  },

  "&:hover": {
    color: "#00c4cc",
  },
}));

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
`;
