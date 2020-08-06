import React, { useMemo } from "react";

// Components
import Form from "../../components/form/form.component";
import Card from "../../components/card/card.component";
import Button from "../../components/button/button.component";
import Link from "../../components/link/link.component";

// Styled Components
import { ButtonText } from "../../components/button/button.styles";

// Helper functions
import isEmail from "../../util/isEmail/isEmail";

// Custom hooks
import useForm from "../../hooks/useForm";

const initialInputValues = {
  name: {
    value: "",
    focused: false,
  },
  email: {
    value: "",
    focused: false,
  },
  password: {
    value: "",
    focused: false,
  },
};

const Signup = () => {
  const { inputValues, handleOnChange, handleSubmit } = useForm(
    initialInputValues
  );

  const checkEmail = useMemo(() => isEmail(inputValues.email.value), [
    inputValues.email,
  ]);

  return (
    <Card data-test="component-signup">
      <Card.Header data-test="component-header">
        Create your account
      </Card.Header>
      <Card.Body>
        <Form data-test="component-form" onSubmit={handleSubmit}>
          <Form.InputGroup>
            <Form.Input
              data-test="name-input"
              placeholder="Name"
              type="text"
              onChange={handleOnChange}
              name="name"
              value={inputValues.name.value}
              valid={inputValues.name.value !== ""}
              focused={inputValues.name.focused}
              invalidText="Please enter your name."
            />
          </Form.InputGroup>

          <Form.InputGroup>
            <Form.Input
              data-test="email-input"
              placeholder="Email"
              type="email"
              onChange={handleOnChange}
              name="email"
              value={inputValues.email.value}
              valid={checkEmail}
              focused={inputValues.email.focused}
              invalidText="Please enter a valid email address."
            />
          </Form.InputGroup>

          <Form.InputGroup>
            <Form.Input
              data-test="password-input"
              type="password"
              placeholder="Password"
              onChange={handleOnChange}
              name="password"
              valid={inputValues.password.value.length > 10}
              focused={inputValues.password.focused}
              invalidText="Password must be at least 10 characters long."
            />
          </Form.InputGroup>

          <Button
            data-test="signup-button"
            type="submit"
            color="white"
            backgroundColor="#00c4cc"
            width="100%"
            border="none"
            disabled={
              !checkEmail ||
              inputValues.password.value.length < 10 ||
              inputValues.name.value === ""
            }
          >
            <ButtonText>Get started, it's free!</ButtonText>
          </Button>
        </Form>
      </Card.Body>

      <Card.Footer>
        <p style={{ marginBottom: ".6rem" }}>
          By signing up, you agree to Canva's <Link>Terms of Use</Link> and{" "}
          <Link>Privacy Policy</Link>
        </p>
        <p>
          Already signed up?{" "}
          <Link data-test="login-link" to="/login" color="#00c4cc">
            Log in
          </Link>
        </p>
      </Card.Footer>
    </Card>
  );
};

export default Signup;
