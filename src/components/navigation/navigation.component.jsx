import React from "react";
import CanvaLogo from "../../assets/logo.png";

// styled-components
import {
  Header,
  Nav,
  List,
  ListItem,
  Logo,
  ButtonContainer,
} from "./navigation.styles";

// Custom components
import Button from "../button/button.component";

/**
 * Renders out main navigation component
 * @function Navigation
 * @return {JSX}
 */
const Navigation = () => {
  return (
    <Header data-test="main-navigation">
      <Logo data-test="main-logo" src={CanvaLogo} />
      <Nav>
        <List>
          <ListItem data-test="home-link">Home</ListItem>
          <ListItem data-test="templates-link">Templates</ListItem>
          <ListItem data-test="discover-link">Discover</ListItem>
          <ListItem data-test="learn-link">Learn</ListItem>
          <ListItem data-test="pricing-link">Pricing</ListItem>
        </List>
      </Nav>

      <ButtonContainer>
        <Button data-test="log-in-btn" style={{ marginRight: "1rem" }}>
          Log in
        </Button>
        <Button data-test="sign-up-btn">Sign up</Button>
      </ButtonContainer>
    </Header>
  );
};

export default Navigation;
