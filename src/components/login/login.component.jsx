import React from "react";

// Components
import Card from "../card/card.component";
import GoogleButton from "../button/google-button/google-button.component";
import FacebookButton from "../button/facebook-button/facebook-button.component";

const Login = () => {
  return (
    <Card>
      <Card.Header>Log in to your account</Card.Header>
      <Card.Body>
        <GoogleButton />
        <FacebookButton />

        <span>or</span>
      </Card.Body>
    </Card>
  );
};

export default Login;
