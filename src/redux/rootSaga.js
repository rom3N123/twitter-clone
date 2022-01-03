import { all } from "redux-saga/effects";
import { authRootSaga } from "./ducks/auth";
import { usersRootSaga } from "./ducks/user";

export default function* rootSaga() {
    yield all([authRootSaga(), usersRootSaga()]);
}
