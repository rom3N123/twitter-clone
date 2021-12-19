import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Auth from "./pages/Auth";
import LoadingScreen from "@components/LoadingIndicators/LoadingScreen";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="profile" />
                    <Route path="bookmarks" />
                    <Route path="messages" />
                    <Route path="explore" />
                </Route>

                <Route path="/auth" element={<Auth />}>
                    <Route path="login" />
                    <Route path="registration" />
                </Route>
            </Routes>

            <LoadingScreen />
        </>
    );
}

export default App;
