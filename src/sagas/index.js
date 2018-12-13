import { INCREMENT_ASYNC } from "../constants/counter";
import { takeEvery, put } from "redux-saga/effects";
import { delay } from "redux-saga";

function* incrementAsync() {
  yield delay(2000);
  yield put({ type: "INCREMENT" });
}

export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}
