import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ResponsiveContainer from "./components/containers/ResponsiveContainer";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveContainer>
        <Route exact path="/" component={HomePage} />
      </ResponsiveContainer>
    </BrowserRouter>
  );
}

export default App;
