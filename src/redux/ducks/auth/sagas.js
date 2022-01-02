import axios from "axios";
import { call, put, fork, takeEvery, takeLatest } from "redux-saga/effects";

export function* loginWorkerSaga() {
    console.log("login");
}

export function* loginWatcherSaga() {
    yield takeEvery("auth/login", loginWorkerSaga);
}

export function* registerWorkerSaga() {
    console.log("register");
}

export function* registerWatcherSaga() {
    yield takeEvery("auth/register", registerWorkerSaga);
}

export default function* authRootSaga() {
    yield fork(registerWatcherSaga);
    yield fork(loginWatcherSaga);
}
