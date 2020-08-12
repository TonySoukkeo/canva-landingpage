import React from "react";

// styled-components
import {
  Header,
  Nav,
  List,
  ListItem,
  ButtonContainer,
} from "./navigation.styles";

// Custom Component
import ButtonLink from "../button/button-link/button-link.component";
import Logo from "../logo/logo.component";

const buttonStyle = {
  minWidth: "81.53px",
  color: "#fff",
  minHeight: "auto",
};

/**
 * Renders out main navigation component
 * @function Navigation
 * @return {JSX}
 */
const Navigation = () => {
  return (
    <Header data-test="main-navigation">
      <Logo data-test="main-logo" to="/" />
      <Nav>
        <List>
          <ListItem data-test="home-link" active>
            Home
          </ListItem>
          <ListItem data-test="templates-link">Templates</ListItem>
          <ListItem data-test="discover-link">Discover</ListItem>
          <ListItem data-test="learn-link">Learn</ListItem>
          <ListItem data-test="pricing-link">Pricing</ListItem>
        </List>
      </Nav>

      <ButtonContainer>
        <ButtonLink
          data-test="log-in-btn"
          to="/login"
          style={{
            ...buttonStyle,
            marginRight: "1rem",
            borderColor: "#fff",
            borderWidth: "1.6px",
            backgroundColor: "transparent",
          }}
        >
          Log in
        </ButtonLink>
        <ButtonLink
          data-test="sign-up-btn"
          to="/signup"
          style={{
            ...buttonStyle,
            backgroundColor: "rgb(239, 239, 239)",
            border: "none",
            color: "#0e1318",
          }}
        >
          Sign up
        </ButtonLink>
      </ButtonContainer>
    </Header>
  );
};

export default Navigation;
