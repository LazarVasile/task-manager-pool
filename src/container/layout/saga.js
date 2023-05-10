import { takeLatest, takeEvery, call, all, put } from "@redux-saga/core/effects";
import * as actionCreator from "./slice"

function* getUser(action) {
    try {
        yield put(actionCreator.actions.getUserFetch());
        yield put(actionCreator.actions.getUserFetched("Vasile Lazar"));
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

export function* sagaWatcher() {
    yield takeLatest(actionCreator.getUser.toString(), getUser)
};