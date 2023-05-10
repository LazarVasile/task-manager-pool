import { takeLatest, takeEvery, call, all, put } from "@redux-saga/core/effects";
import * as actionCreator from "./slice"

function* getUserDetails(action) {
    try {
        console.log("test user details");
    } catch (error) {
        console.log("error");
    }
}

export function* sagaWatcher() {
    yield takeLatest(actionCreator.getUserDetails.toString(), getUserDetails)
};  