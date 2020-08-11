import React from "react";

// Styled Components
import { Wrapper, Header, Text } from "./not-found.styles";

// Custom Components
import Logo from "../../components/logo/logo.component";
import Link from "../../components/link/link.component";

const NotFound = () => {
  return (
    <Wrapper data-test="component-not-found">
      <Logo style={{ width: "6rem" }} />
      <Header style={{ marginTop: "1rem" }}>Not found (404)</Header>
      <Text>Sorry, the page you are looking for does not exist.</Text>

      <Link
        data-test="back-link"
        to="/"
        style={{
          textDecoration: "none",
          color: "#00c4cc",
          fontWeight: 700,
          marginTop: "1rem",
        }}
      >
        Take me home
      </Link>
    </Wrapper>
  );
};

export default NotFound;
