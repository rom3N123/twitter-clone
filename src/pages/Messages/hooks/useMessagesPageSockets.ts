import React from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000/");

const useMessagesPageSockets = () => {
    React.useEffect(() => {
        socket.emit("JOIN_MESSAGES");
    }, []);
};

export default useMessagesPageSockets;
