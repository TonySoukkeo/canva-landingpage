import React from "react";
import Img from "../../assets/logo.png";

// Styled Components
import { LogoLinkWrapper, Logo } from "./logo.styles";

export default ({ to, ...otherProps }) => {
  let display;

  if (to) {
    display = (
      <LogoLinkWrapper to={to}>
        <Logo src={Img} {...otherProps} />
      </LogoLinkWrapper>
    );
  } else {
    display = <Logo src={Img} {...otherProps} />;
  }

  return display;
};
