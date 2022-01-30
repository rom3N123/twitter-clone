import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Auth from "./pages/Auth";
import LoadingScreen from "@components/LoadingIndicators/LoadingScreen";
import { useDispatch } from "react-redux";
import { setIsLoadingWithScreenAction } from "@redux/ducks/general/actions";
import PrivateRoute from "@components/routes/PrivateRoute";
import ProtectedRoute from "@components/routes/ProtectedRoute";
import { loginAction } from "@redux/ducks/auth/actions";
import { useAppSelector } from "@redux/hooks";
import { selectGeneralState } from "@redux/ducks/general";

function App() {
    const { isLoadingWithScreen } = useAppSelector(selectGeneralState);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            dispatch(loginAction());
        } else {
            dispatch(setIsLoadingWithScreenAction(false));
        }
    }, []);

    return (
        <>
            <LoadingScreen />

            {!isLoadingWithScreen && (
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Layout />
                            </PrivateRoute>
                        }
                    >
                        <Route path="messages" />
                        <Route path=":userId" />
                        <Route path="bookmarks" />
                        <Route path="explore" />
                        <Route path=":userId/tweet/:tweetId" />
                    </Route>

                    <Route
                        path="/auth"
                        element={
                            <ProtectedRoute>
                                <Auth />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="login" />
                        <Route path="registration" />
                    </Route>
                </Routes>
            )}
        </>
    );
}

export default App;
