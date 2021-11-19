export const authReducer = (state, action) => {
  const {
    type,
    payload: { isAuthenticated },
  } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        authLoading: false,
        isAuthenticated,
      };

    default:
      return state;
  }
};
