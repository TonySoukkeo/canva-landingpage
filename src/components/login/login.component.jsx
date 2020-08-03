import React from "react";
import "../button/button.styles.css";

// Components
import Card from "../card/card.component";
import GoogleButton from "../button/google-button/google-button.component";
import FacebookButton from "../button/facebook-button/facebook-button.component";
import AppleButton from "../button/apple-button/apple-button.component";
import Form from "../form/form.component";
import Button from "../button/button.component";

const Login = () => {
  return (
    <Card data-test="component-login">
      <Card.Header data-test="component-header">
        Log in to your account
      </Card.Header>
      <Card.Body>
        <GoogleButton
          data-test="google-login"
          placeholder="Log in with Google"
          className="btn"
        />
        <FacebookButton
          data-test="facebook-login"
          placeholder="Log in with Facebook"
          className="btn"
        />
        <AppleButton
          data-test="apple-login"
          placeholder="Log in with Apple"
          className="btn"
        />

        <span>or</span>

        <Form data-test="component-form">
          <Form.InputGroup>
            <Form.Input
              data-test="email-or-cell-input"
              type="text"
              placeholder="Email or Cell"
            />
          </Form.InputGroup>

          <Form.InputGroup>
            <Form.Input
              data-test="password-input"
              type="password"
              placeholder="Email or Cell"
            />
          </Form.InputGroup>

          <Button data-test="login-button" type="submit">
            Log in
          </Button>
        </Form>
      </Card.Body>

      <Card.Footer>
        <span data-test="forgot-password-link">Forgot password?</span>
        <p>
          New to Canva? <span data-test="signup-link">Sign up</span>
        </p>
      </Card.Footer>
    </Card>
  );
};

export default Login;
