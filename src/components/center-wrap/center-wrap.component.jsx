import React from "react";

// Styled Components
import { Wrapper } from "./center-wrap.styles";

const CenterWrap = ({ children, ...otherProps }) => (
  <Wrapper {...otherProps}>{children}</Wrapper>
);

export default CenterWrap;
