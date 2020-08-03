import React from "react";
import "../button/button.styles.css";

// Styled Components
import { ButtonText } from "../button/button.styles";

// Components
import Card from "../card/card.component";
import GoogleButton from "../button/google-button/google-button.component";
import FacebookButton from "../button/facebook-button/facebook-button.component";
import AppleButton from "../button/apple-button/apple-button.component";
import Form from "../form/form.component";
import Button from "../button/button.component";
import LineDecorator from "../line-decorator/line-decorator.component";
import Link from "../link/link.component";

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

        <LineDecorator style={{ marginBottom: "1rem" }}>or</LineDecorator>

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
              placeholder="Password"
            />
          </Form.InputGroup>

          <Button
            data-test="login-button"
            type="submit"
            className="btn btn--blue"
          >
            <ButtonText>Log in</ButtonText>
          </Button>
        </Form>
      </Card.Body>

      <Card.Footer>
        <Link
          data-test="forgot-password-link"
          style={{
            marginBottom: ".5rem",
          }}
        >
          Forgot password?
        </Link>
        <p>
          New to Canva?{" "}
          <Link data-test="signup-link" color="#00c4cc">
            Sign up
          </Link>
        </p>
      </Card.Footer>
    </Card>
  );
};

export default Login;
