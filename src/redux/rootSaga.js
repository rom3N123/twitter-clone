import { fork } from "redux-saga/effects";
import { authRootSaga } from "./ducks/auth";

export default function* rootSaga() {
    yield fork(authRootSaga);
}
