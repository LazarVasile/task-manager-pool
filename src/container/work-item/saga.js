import { takeLatest, takeEvery, call, all, put } from "@redux-saga/core/effects";
import * as actionCreator from "./slice"

function* getWorkItemDetails(action) {
    try {
        console.log("test WorkItem details");
    } catch (error) {
        console.log("error");
    }
}

export function* sagaWatcher() {
    yield takeLatest(actionCreator.getWorkItemDetails.toString(), getWorkItemDetails)
};