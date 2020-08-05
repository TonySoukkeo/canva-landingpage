import React from "react";
import CanvaLogo from "../../assets/logo.png";

// styled-components
import {
  Header,
  Nav,
  List,
  ListItem,
  Logo,
  LogoLinkWrapper,
  ButtonContainer,
} from "./navigation.styles";

// Custom Component
import ButtonLink from "../button/button-link/button-link.component";

const buttonStyle = {
  minWidth: "81.53px",
  color: "#fff",
  minHeight: "auto",
  paddingTop: ".7rem",
  paddingBottom: ".7rem",
};

/**
 * Renders out main navigation component
 * @function Navigation
 * @return {JSX}
 */
const Navigation = () => {
  return (
    <Header data-test="main-navigation">
      <LogoLinkWrapper to="/">
        <Logo data-test="main-logo" src={CanvaLogo} />
      </LogoLinkWrapper>
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
        <ButtonLink
          data-test="log-in-btn"
          to="/login"
          marginRight="1rem"
          borderColor="#fff"
          borderWidth="1.6px"
          {...buttonStyle}
        >
          Log in
        </ButtonLink>
        <ButtonLink
          data-test="sign-up-btn"
          to="/signup"
          backgroundColor="#00c4cc"
          border="none"
          {...buttonStyle}
        >
          Sign up
        </ButtonLink>
      </ButtonContainer>
    </Header>
  );
};

export default Navigation;
