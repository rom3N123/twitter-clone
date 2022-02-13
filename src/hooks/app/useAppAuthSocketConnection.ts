import React from "react";
import socket from "@http/authSocket";
import { useAppSelector } from "@redux/hooks";
import { selectAuthState } from "@redux/ducks/auth";

const useAppAuthSocketConnection = (): void => {
    const { isAuth } = useAppSelector(selectAuthState);

    React.useEffect(() => {
        if (isAuth) {
            socket.connect();
        }

        return () => {
            socket.disconnect();
        };
    }, [isAuth]);
};

export default useAppAuthSocketConnection;
