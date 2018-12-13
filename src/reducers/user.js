const initialState = {
  isFetching: false,
  err: null,
  user: null
};

export default (state = initialState, { type, user, error }) => {
  switch (type) {
    case "FETCH_USER_REQUEST":
      return {
        isFetching: true,
        error: null,
        user: null
      };
    case "FETCH_USER_SUCCESS":
      return {
        isFetching: false,
        error: null,
        user: user
      };
    case "FETCH_USER_FALURE":
      return {
        isFetching: false,
        error: error,
        user: null
      };
    default:
      return state;
  }
};
