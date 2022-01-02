import React from "react";
import { Navigate } from "react-router-dom";
import { selectAuthState } from "@ducks/auth";
import { useAppSelector } from "@redux/hooks";

const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({
    children,
}) => {
    const { isAuth } = useAppSelector(selectAuthState);

    return !isAuth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
