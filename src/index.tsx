import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ThemeProvider from "@contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <ThemeProvider>
                <Router>
                    <CssBaseline />
                    <GlobalStyles />
                    <App />
                </Router>
            </ThemeProvider>
        </Provider>
    </QueryClientProvider>,
    document.getElementById("root")
);
