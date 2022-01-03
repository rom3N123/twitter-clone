import { call, put, takeEvery, all } from "redux-saga/effects";
import { setUserAction } from "../user";
import { setIsAuthAction } from "./actions";
import { setIsLoadingWithScreenAction } from "../general/actions";
import AuthService from "../../../services/AuthService";

export function* loginWorkerSaga(action) {
    try {
        const functionToExecute = action.payload
            ? AuthService.loginByCredentials
            : AuthService.loginByToken;

        const user = yield call(functionToExecute, action.payload);
        yield put(setUserAction(user));
        yield put(setIsAuthAction(true));
        yield put(setIsLoadingWithScreenAction(false));
    } catch (e) {
        console.error(e);
    }
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

export function* logoutWorkerSaga() {
    yield put(setIsAuthAction(false));
    yield put(setUserAction({}));
    AuthService.logout();
}

export function* logoutWatcherSaga() {
    yield takeEvery("auth/logout", logoutWorkerSaga);
}

export default function* authRootSaga() {
    yield all([registerWatcherSaga(), loginWatcherSaga(), logoutWatcherSaga()]);
}
