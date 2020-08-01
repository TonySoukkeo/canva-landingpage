import React from "react";
import CheckIcon from "@material-ui/icons/Check";

// Styled Components
import { List, ListItem } from "./getting-started.styles";

// Components
import Card from "../card/card.component";

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
        </Card.Body>
      </Card>
    </div>
  );
};

export default GettingStarted;
