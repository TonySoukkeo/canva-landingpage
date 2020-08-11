import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import Route from "./components/route/route.component";

// Custo Components
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

// Css styles
import "./App.css";

// Styled Components
import { Main } from "./App.styles";

// Lazy load components
const GettingStarted = lazy(() =>
  import("./pages/getting-started/getting-started.component")
);
const LoginContainer = lazy(() =>
  import("./pages/login/login-container.component")
);
const Signup = lazy(() => import("./pages/signup/signup.component"));
const NotFound = lazy(() => import("./pages/not-found/not-found.component"));

function App() {
  return (
    <Main data-test="component-app">
      <ErrorBoundary>
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Route exact path="/" Component={GettingStarted} navigation />
            <Route path="/login" Component={LoginContainer} navigation />
            <Route exact path="/signup" Component={Signup} navigation />
            <Route Component={NotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Main>
  );
}

export default App;
