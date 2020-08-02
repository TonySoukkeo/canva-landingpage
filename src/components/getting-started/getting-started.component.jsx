import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import "./getting-started.styles.css";

// Styled Components
import { List, ListItem, Icon, ButtonText } from "./getting-started.styles";

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
            <Icon>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.62z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.4 5.4 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A9 9 0 0 0 3.96 7.95l3 2.34A5.36 5.36 0 0 1 12 6.58z"
                    fill="#EA4335"
                  ></path>
                </g>
              </svg>
            </Icon>

            <ButtonText>Sign up with Google</ButtonText>
          </Button>
          <Button data-test="facebook-signup-btn" className="btn">
            <Icon>
              <svg
                style={{
                  color: "#3b5998",
                }}
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.61v-6.97h-2.34V11.3h2.34v-2c0-2.33 1.42-3.6 3.5-3.6 1 0 1.84.08 2.1.12v2.43h-1.44c-1.13 0-1.35.53-1.35 1.32v1.73h2.69l-.35 2.72h-2.34V21h4.59a1 1 0 0 0 .99-1V4a1 1 0 0 0-1-1z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12.61 14.03V21h2.81v-6.98h2.34l.35-2.72h-2.69V9.57c0-.79.22-1.32 1.35-1.32h1.44V5.82c-.26-.04-1.1-.12-2.1-.12-2.08 0-3.5 1.27-3.5 3.6v2h-2.34v2.73h2.34z"
                  fill="#fff"
                ></path>
              </svg>
            </Icon>
            <ButtonText>Sign up with Facebook</ButtonText>
          </Button>
          <Button data-test="email-signup-btn" className="btn btn--blue">
            <ButtonText>Sign up with email</ButtonText>
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
