import React from "react";
import CheckIcon from "@material-ui/icons/Check";

// Styled Components
import { List, ListItem } from "./getting-started.styles";

// Components
import Card from "../../components/card/card.component";
import ButtonLink from "../../components/button/button-link/button-link.component";
import GoogleButton from "../../components/button/google-button/google-button.component";
import FacebookButton from "../../components/button/facebook-button/facebook-button.component";
import Link from "../../components/link/link.component";

const CheckIconStyles = {
  marginRight: ".4rem",
  color: "#00c4cc",
};

const emailSignUpButtonStyles = {
  width: "100%",
  backgroundColor: "#00c4cc",
  color: "#fff",
  border: "none",
};

/**
 * Default card display that renders out CTA buttons and default information
 * @function GettingStarted
 * @returns {JSX}
 */
const GettingStarted = () => {
  return (
    <Card data-test="component-getting-started">
      <Card.Header data-test="component-header">
        Get started with Canva
      </Card.Header>
      <Card.Body>
        <p>Sign up to discover the full power of Canva.</p>
        <br />
        <List>
          <ListItem>
            <CheckIcon style={CheckIconStyles} /> Free Forever
          </ListItem>
          <ListItem>
            <CheckIcon style={CheckIconStyles} /> Create stuning designs and
            documents in minutes
          </ListItem>
          <ListItem>
            <CheckIcon style={CheckIconStyles} /> No design experience? No
            problem!
          </ListItem>
        </List>

        <br />

        {/*** BUTTONS ***/}
        <GoogleButton
          data-test="google-signup-btn"
          placeholder="Sign up with Google"
        />
        <FacebookButton
          data-test="facebook-signup-btn"
          placeholder="Sign up with Facebook"
        />
        <ButtonLink
          data-test="email-signup-btn"
          to="/signup"
          {...emailSignUpButtonStyles}
        >
          Sign up with email
        </ButtonLink>
      </Card.Body>

      <Card.Footer>
        Already signed up?{" "}
        <Link data-test="login-btn" to="/login" color="#00c4cc">
          Log in
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default GettingStarted;
