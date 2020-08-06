import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// Mixins
const LogoStyle = css(({ ...otherProps }) => ({
  width: "4rem",
  ...otherProps,
}));

export const Header = styled.header`
  display: flex;
  align-items: center;
  background: transparent;
  padding: 0.5rem 2.5rem;
`;

export const Nav = styled.nav`
  margin-left: 1.5rem;
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  margin-right: 1rem;
  color: #fff;
`;

export const Logo = styled.img`
  ${LogoStyle}
`;

export const LogoLinkWrapper = styled(Link)`
  display: flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
`;
