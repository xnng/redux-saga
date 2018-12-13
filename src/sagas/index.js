import { all } from "redux-saga/effects";
import { countSagas } from "./counter";
import { userSagas } from "./user";

export default function* rootSaga() {
  yield all([...countSagas, ...userSagas]);
}
