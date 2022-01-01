import React from "react";
import { Navigate } from "react-router-dom";
import { selectAuthState } from "@ducks/auth";
import { useAppSelector } from "@redux/hooks";

const PrivateRoute: React.FC<{ children: React.ReactElement }> = ({
    children,
}): React.ReactElement => {
    const { isAuth } = useAppSelector(selectAuthState);

    return isAuth ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
