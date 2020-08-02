import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import "./getting-started.styles.css";

// Styled Components
import { List, ListItem } from "./getting-started.styles";

// Components
import Card from "../card/card.component";
import Button from "../button/button.component";

const CheckIconStyles = {
  marginRight: ".4rem",
  color: "#00c4cc",
};

/**
 * Default card display that renders out CTA buttons and default information
 * @function GettingStarted
 * @returns {JSX}
 */
const GettingStarted = () => {
  return (
    <div data-test="component-getting-started">
      <Card
        style={{
          position: "relative",
          margin: "8rem auto 0 auto",
        }}
      >
        <Card.Header>Get started with Canva</Card.Header>
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
          <Button data-test="google-signup-btn" className="btn">
            Sign up with Google
          </Button>
          <Button data-test="facebook-signup-btn" className="btn">
            Sign up with Facebook
          </Button>
          <Button data-test="email-signup-btn" className="btn btn--blue">
            Sign up with email
          </Button>
        </Card.Body>

        <Card.Footer>
          Already signed up?{" "}
          <button data-test="login-btn" className="login-btn">
            Log in
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default GettingStarted;
