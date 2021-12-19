import React from "react";
import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ThemeProvider from "@contexts/ThemeContext";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider>
            <Router>
                <CssBaseline />
                <GlobalStyles />
                <App />
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
