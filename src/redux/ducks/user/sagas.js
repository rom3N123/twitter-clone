import UsersService from "@services/UsersService";
import { call, put, takeEvery, all, select } from "redux-saga/effects";
import { selectUserState } from ".";
import { setUserAction } from "./actions";

export function* userUpdateWorkerSaga(action) {
    const { _id } = yield select(selectUserState);
    const updatedUser = yield call(UsersService.update, action.payload, _id);
    yield put(setUserAction(updatedUser));
}

export function* userUpdateWatcherSaga() {
    yield takeEvery("user/update", userUpdateWorkerSaga);
}

export default function* usersRootSaga() {
    yield all([userUpdateWatcherSaga()]);
}
