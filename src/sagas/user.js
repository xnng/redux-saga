import { takeEvery, call, all } from "redux-saga/effects";
import axios from "axios";

function* fetchUser() {
  const [todos, user] = yield all([
    call(axios.get, "https://jsonplaceholder.typicode.com/todos"),
    call(axios.get, "https://jsonplaceholder.typicode.com/users")
  ]);
  console.log(user);
  console.log(todos);
}

function* watchFetchUser() {
  yield takeEvery("FETCH_USER_REQUEST", fetchUser);
}

export const userSagas = [watchFetchUser()];
