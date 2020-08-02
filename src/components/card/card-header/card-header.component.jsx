import React from "react";

// Styled Components
import { Header } from "./card-header.styles";

const CardHeader = ({ children, ...otherProps }) => {
  return <Header {...otherProps}>{children}</Header>;
};

export default CardHeader;
