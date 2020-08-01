import React from "react";

// Css styles
import "./App.css";

// Styled Components
import { Main } from "./App.styles";

// Components
import Navigation from "./components/navigation/navigation.component";
import GettingStarted from "./components/getting-started/getting-started.component";

function App() {
  return (
    <Main data-test="component-app">
      <Navigation />

      <GettingStarted />
    </Main>
  );
}

export default App;
