import React, { useMemo } from "react";

// Styled Components
import { ButtonText } from "../../components/button/button.styles";

// Components
import Card from "../../components/card/card.component";
import GoogleButton from "../../components/button/google-button/google-button.component";
import FacebookButton from "../../components/button/facebook-button/facebook-button.component";
import AppleButton from "../../components/button/apple-button/apple-button.component";
import Form from "../../components/form/form.component";
import Button from "../../components/button/button.component";
import LineDecorator from "../../components/line-decorator/line-decorator.component";
import Link from "../../components/link/link.component";
import BackButton from "../../components/button/back-btn/back-btn.component";

// Helper functions
import isEmail from "../../util/isEmail/isEmail";

// Custom hooks
import useForm from "../../hooks/useForm";

const initialInputValues = {
  emailOrCell: {
    value: "",
    focused: false,
  },
  password: {
    value: "",
    focused: false,
  },
};

const Login = () => {
  const { inputValues, handleOnChange, handleSubmit } = useForm(
    initialInputValues
  );

  const checkEmail = useMemo(() => isEmail(inputValues.emailOrCell.value), [
    inputValues.emailOrCell.value,
  ]);

  return (
    <Card data-test="component-login">
      <Card.Header data-test="component-header">
        <BackButton />
        Log in to your account
      </Card.Header>
      <Card.Body>
        <GoogleButton
          data-test="google-login"
          placeholder="Log in with Google"
        />
        <FacebookButton
          data-test="facebook-login"
          placeholder="Log in with Facebook"
        />
        <AppleButton data-test="apple-login" placeholder="Log in with Apple" />

        <LineDecorator style={{ marginBottom: "1rem" }}>or</LineDecorator>

        <Form data-test="component-form" onSubmit={handleSubmit}>
          <Form.InputGroup>
            <Form.Input
              data-test="email-or-cell-input"
              type="text"
              placeholder="Email or Cell"
              onChange={handleOnChange}
              value={inputValues.emailOrCell.value}
              name="emailOrCell"
              focused={inputValues.emailOrCell.focused}
              valid={checkEmail}
              invalidText="Please enter a valid email address or cell phone number."
            />
          </Form.InputGroup>

          <Form.InputGroup>
            <Form.Input
              data-test="password-input"
              type="password"
              placeholder="Password"
              onChange={handleOnChange}
              value={inputValues.password.value}
              name="password"
              focused={inputValues.password.focused}
              valid={inputValues.password.value.length > 10}
              invalidText="Please enter your password."
            />
          </Form.InputGroup>

          <Button
            data-test="login-button"
            type="submit"
            backgroundColor="#00c4cc"
            borderStyle="none"
            width="100%"
            disabled={!checkEmail || inputValues.password.value.length < 10}
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
