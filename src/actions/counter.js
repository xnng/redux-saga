import { INCREMENT, INCREMENT_ASYNC } from "../constants/counter";

export const increment = () => ({
  type: INCREMENT
});

export const incrementAsync = () => ({
  type: INCREMENT_ASYNC
});
