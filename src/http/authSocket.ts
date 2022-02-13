import manager from "@http/manager";

const token = localStorage.token;

const authSocket = manager.socket("/", {
    auth: {
        token,
    },
});

export default authSocket;
