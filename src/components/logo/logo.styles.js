import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// Mixins
const LogoStyle = css(({ ...otherProps }) => ({
  width: "4rem",
  ...otherProps,
}));

export const LogoLinkWrapper = styled(Link)`
  display: flex;
`;

export const Logo = styled.img`
  ${LogoStyle}
`;
