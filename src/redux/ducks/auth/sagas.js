import { call, put, fork, takeEvery } from "redux-saga/effects";
import { setUserAction } from "../user";
import { setIsAuthAction } from "./actions";
import { setIsLoadingWithScreenAction } from "../general/actions";
import AuthService from "../../../services/AuthService";

export function* loginWorkerSaga(action) {
    const user = yield call(
        action.payload
            ? AuthService.loginByCredentials(action.payload)
            : AuthService.loginByToken()
    );
    yield put(setUserAction(user));
    yield put(setIsAuthAction(true));
    yield put(setIsLoadingWithScreenAction(false));
}

export function* loginWatcherSaga() {
    yield takeEvery("auth/login", loginWorkerSaga);
}

export function* registerWorkerSaga(action) {
    const user = yield call(AuthService.register, action.payload);
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
