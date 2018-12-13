import { INCREMENT } from "../constants/counter";

const initialState = 1;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};
