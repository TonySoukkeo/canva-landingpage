import React from "react";

// Css styles
import "./App.css";

// Styled Components
import { Main } from "./App.styles";

// Components
import Navigation from "./components/navigation/navigation.component";
import StartFlow from "./components/start-flow/start-flow.component";

function App() {
  return (
    <Main data-test="component-app">
      <Navigation />
      <StartFlow data-test="component-start-flow" display="default" />
    </Main>
  );
}

export default App;
