import { Manager } from "socket.io-client";
import { URL } from "./httpConfig";

const manager = new Manager(URL, {
    extraHeaders: {
        myHeader: "YES",
    },
});

export default manager;
