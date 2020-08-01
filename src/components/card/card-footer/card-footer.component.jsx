import React from "react";

// Styled Components
import { Footer } from "./card-footer.styles";

const CardFooter = ({ children, ...otherProps }) => {
  return (
    <Footer data-test="component-card-footer" {...otherProps}>
      {children}
    </Footer>
  );
};

export default CardFooter;
