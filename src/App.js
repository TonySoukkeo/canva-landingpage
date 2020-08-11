import React from "react";
import { Switch } from "react-router-dom";
import Route from "./components/route/route.component";

// Css styles
import "./App.css";

// Styled Components
import { Main } from "./App.styles";

// Pages
import GettingStarted from "./pages/getting-started/getting-started.component";
import LoginContainer from "./pages/login/login-container.component";
import Signup from "./pages/signup/signup.component";
import NotFound from "./pages/not-found/not-found.component";

function App() {
  return (
    <Main data-test="component-app">
      <Switch>
        <Route exact path="/" Component={GettingStarted} navigation />
        <Route path="/login" Component={LoginContainer} navigation />
        <Route exact path="/signup" Component={Signup} navigation />
        <Route Component={NotFound} />
      </Switch>
    </Main>
  );
}

export default App;
