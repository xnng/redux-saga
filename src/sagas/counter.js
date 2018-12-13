import { INCREMENT_ASYNC } from "../constants/counter";
import { takeLatest, put, call } from "redux-saga/effects";
import { delay } from "redux-saga";

function* incrementAsync() {
  yield call(delay, 2000);
  yield put({ type: "INCREMENT" });
}

function* watchIncrementAsync() {
  yield takeLatest(INCREMENT_ASYNC, incrementAsync);
}

export const countSagas = [watchIncrementAsync()];
