import React from "react";

// Components
import Card from "../../components/card/card.component";
import Form from "../../components/form/form.component";
import Button from "../../components/button/button.component";
import Link from "../../components/link/link.component";

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
        <Form
          data-test="component-form"
          style={{
            marginTop: "1rem",
          }}
        >
          <Form.InputGroup>
            <Form.Input
              data-test="component-input"
              placeholder="Email or Cell"
              name="emailOrCell"
            />
          </Form.InputGroup>

          <Button
            data-test="component-button"
            style={{
              width: "100%",
              borderStyle: "none",
              backgroundColor: "#00c4cc",
            }}
            type="submit"
          >
            Continue
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Link data-test="back-button" to="/login">
          Return to log in
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default ForgotPassword;
