import { takeEvery, call, all, put } from "redux-saga/effects";
import axios from "axios";

function* fetchUser() {
  try {
    const user = yield all([
      call(axios.get, "https://jsonplaceholder.typicode.com/users")
    ]);
    yield put({ type: "FETCH_USER_SUCCESS", user: user });
  } catch (e) {
    yield put({ type: "FETCH_USER_FALURE", error: e.message });
  }
}

function* watchFetchUser() {
  yield takeEvery("FETCH_USER_REQUEST", fetchUser);
}

export const userSagas = [watchFetchUser()];
