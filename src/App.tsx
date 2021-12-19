import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Auth from "./pages/Auth";
import LoadingScreen from "@components/LoadingIndicators/LoadingScreen";
import { useDispatch } from "react-redux";
import { setIsLoadingWithScreenAction } from "@redux/ducks/general/actions";

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setIsLoadingWithScreenAction(false));
    }, []);

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
