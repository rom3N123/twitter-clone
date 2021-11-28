import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContext from "./contexts/ThemeContext";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <ThemeContext>
    <Router>
      <CssBaseline />
      <GlobalStyles />
      <App />
    </Router>
  </ThemeContext>,
  document.getElementById("root")
);
