import manager from "@http/manager";

const authSocket = manager.socket("/", {
    auth: (cb) => {
        cb({
            token: localStorage.token,
        });
    },
});

export default authSocket;
