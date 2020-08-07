import React from "react";
import { Switch, Route } from "react-router-dom";

// Css styles
import "./App.css";

// Styled Components
import { Main } from "./App.styles";

// Components
import Navigation from "./components/navigation/navigation.component";
import GettingStarted from "./pages/getting-started/getting-started.component";
import LoginContainer from "./pages/login/login-container.component";
import Signup from "./pages/signup/signup.component";
import CenterWrap from "./components/center-wrap/center-wrap.component";

function App() {
  return (
    <Main data-test="component-app">
      <Navigation />
      <CenterWrap data-test="component-center-wrap" marginTop="3rem">
        <Switch>
          <Route exact path="/" component={GettingStarted} />
          <Route path="/login" component={LoginContainer} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </CenterWrap>
    </Main>
  );
}

export default App;
