import React from "react";

// Components
import Card from "../card/card.component";
import Form from "../form/form.component";
import Button from "../button/button.component";
import Link from "../link/link.component";

const ForgotPassword = () => {
  return (
    <Card data-test="component-forgot-password">
      <Card.Header data-test="component-header">
        Forgotten your password?
      </Card.Header>
      <Card.Body data-test="component-body">
        <p>
          Don't worry, we'll send you a message to help you reset your password.
        </p>
        <Form data-test="component-form">
          <Form.InputGroup>
            <Form.Input
              data-test="component-input"
              placeHolder="Email or Cell"
              name="emailOrCell"
            />
          </Form.InputGroup>

          <Button data-test="component-button">Continue</Button>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Link data-test="back-button">Return to log in</Link>
      </Card.Footer>
    </Card>
  );
};

export default ForgotPassword;
