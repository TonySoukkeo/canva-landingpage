import React from "react";

// Components
import Form from "../form/form.component";
import Card from "../card/card.component";
import Button from "../button/button.component";

const Signup = () => {
  return (
    <Card data-test="component-signup">
      <Card.Header data-test="component-header">
        Create your account
      </Card.Header>
      <Card.Body>
        <Form data-test="component-form">
          <Form.InputGroup>
            <Form.Input data-test="name-input" placeholder="Name" type="text" />
          </Form.InputGroup>

          <Form.InputGroup>
            <Form.Input
              data-test="email-input"
              placeholder="Email"
              type="email"
            />
          </Form.InputGroup>

          <Form.InputGroup>
            <Form.Input
              data-test="password-input"
              type="password"
              placeholder="Password"
            />
          </Form.InputGroup>

          <Button
            data-test="signup-button"
            type="
                submit"
          >
            Get started, it's free!
          </Button>
        </Form>
      </Card.Body>

      <Card.Footer>
        <p>
          by signing up, you agree to Canva's <span>Terms of Use</span> and{" "}
          <span>Privacy Policy</span>
        </p>

        <p>
          Already signed up? <span data-test="login-link">Log in</span>
        </p>
      </Card.Footer>
    </Card>
  );
};

export default Signup;
