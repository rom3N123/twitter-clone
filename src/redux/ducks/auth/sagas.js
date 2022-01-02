import $api from "../../../http/axios";
import { call, put, fork, takeEvery } from "redux-saga/effects";
import { setUserAction } from "../user";
import { setIsAuthAction } from "./actions";
import { setIsLoadingWithScreenAction } from "../general/actions";

const register = async (data) => {
    const {
        data: { user, token },
    } = await $api.post("/auth/register", data);

    localStorage.setItem("token", token);

    return user;
};

const loginByCredentials = async (credentials) => {
    const {
        data: { user, token },
    } = await $api.post("/auth/login", credentials);

    localStorage.setItem("token", token);

    return user;
};

const loginByToken = async () => {
    const token = localStorage.getItem("token");

    const {
        data: { user },
    } = await $api.get("/auth/login", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return user;
};

export function* loginWorkerSaga(action) {
    const user = yield call(
        action.payload ? loginByCredentials : loginByToken,
        action.payload
    );
    yield put(setUserAction(user));
    yield put(setIsAuthAction(true));
    yield put(setIsLoadingWithScreenAction(false));
}

export function* loginWatcherSaga() {
    yield takeEvery("auth/login", loginWorkerSaga);
}

export function* registerWorkerSaga(action) {
    const user = yield call(register, action.payload);
    yield put(setUserAction(user));
    yield put(setIsAuthAction(true));
}

export function* registerWatcherSaga() {
    yield takeEvery("auth/register", registerWorkerSaga);
}

export default function* authRootSaga() {
    yield fork(registerWatcherSaga);
    yield fork(loginWatcherSaga);
}
