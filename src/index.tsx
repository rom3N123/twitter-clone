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
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "@components/AlertTemplate";

const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <ThemeProvider>
                <Router>
                    <CssBaseline />
                    <GlobalStyles />
                    <AlertProvider timeout={3000} template={AlertTemplate}>
                        <App />
                    </AlertProvider>
                </Router>
            </ThemeProvider>
        </Provider>
    </QueryClientProvider>,
    document.getElementById("root")
);
