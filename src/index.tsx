import React from "react";
import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ThemeManager from "./components/PageComponents/ThemeManager/ThemeManager";

ReactDOM.render(
    <Provider store={store}>
        <ThemeManager>
            <Router>
                <CssBaseline />
                <GlobalStyles />
                <App />
            </Router>
        </ThemeManager>
    </Provider>,
    document.getElementById("root")
);
