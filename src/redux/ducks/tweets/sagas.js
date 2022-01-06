import { all, takeEvery } from "redux-saga/effects";

function* createTweetWorkerSaga() {}

function* createTweetWatcherSaga() {
    yield takeEvery("tweets/create", createTweetWorkerSaga);
}

export default function* tweetsRootSaga() {
    yield all([createTweetWatcherSaga()]);
}
