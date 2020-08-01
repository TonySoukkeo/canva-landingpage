import React from "react";

// Styled Components
import { Header } from "./card-header.styles";

const CardHeader = ({ children, ...otherProps }) => {
  return (
    <Header data-test="component-card-header" {...otherProps}>
      {children}
    </Header>
  );
};

export default CardHeader;
