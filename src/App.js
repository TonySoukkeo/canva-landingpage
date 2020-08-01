import React from "react";

// Css styles
import "./App.css";

// Styled Components
import { Main } from "./App.styles";

// Components
import Navigation from "./components/navigation/navigation.component";

function App() {
  return (
    <Main>
      <Navigation />
    </Main>
  );
}

export default App;
