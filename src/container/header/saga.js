import { takeLatest, takeEvery, call, all, put } from "@redux-saga/core/effects";
import * as actionCreator from "./slice"

function* sagaFunction(action) {
    try {
    } catch (error) {
    }
}

export function* sagaWatcher() {
    yield takeLatest(actionCreator.sagaFunction.toString(), sagaFunction)
};