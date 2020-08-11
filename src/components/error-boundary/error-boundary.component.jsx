import React, { Component } from "react";

// Styled Components
import { Header, Wrapper } from "./error-boundary.styles";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError)
      return (
        <Wrapper>
          <Header>Ooops, something went wrong :(</Header>
        </Wrapper>
      );

    return children;
  }
}

export default ErrorBoundary;
