import { all } from "redux-saga/effects";
import { authRootSaga } from "./ducks/auth";
import { usersRootSaga } from "./ducks/user";
import { tweetsRootSaga } from "./ducks/tweets";

export default function* rootSaga() {
    yield all([authRootSaga(), usersRootSaga(), tweetsRootSaga()]);
}
