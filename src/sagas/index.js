import { INCREMENT_ASYNC } from "../constants/counter";
import { takeLatest, takeEvery, put, call, all } from "redux-saga/effects";
import { delay } from "redux-saga";
import axios from "axios";

function* incrementAsync() {
  yield call(delay, 2000);
  yield put({ type: "INCREMENT" });
}

function* watchIncrementAsync() {
  yield takeLatest(INCREMENT_ASYNC, incrementAsync);
}

function* fetchUser() {
  const user = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(user);
}

function* watchFetchUser() {
  yield takeEvery("FETCH_USER_REQUEST", fetchUser);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchFetchUser()]);
}
