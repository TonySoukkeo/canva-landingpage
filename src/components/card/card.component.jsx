import React from "react";

// Components
import CardHeader from "./card-header/card-header.component";
import CardBody from "./card-body/card-body.component";
import CardFooter from "./card-footer/card-footer.component";

// Styled Components
import { MainCard } from "./card.styles";

/**
 * Compound Component for Card, that has multiple properties to it such as Header, Body, Footer..
 * @function Card
 * @param {JSX} children
 * @param {any}  otherProps - Any other props to be passed in when using Card Component
 * @returns {JSX}
 */
const Card = ({ children, ...otherProps }) => {
  return (
    <MainCard data-test="component-card" {...otherProps}>
      {children}
    </MainCard>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
