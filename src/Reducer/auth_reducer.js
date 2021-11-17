export const authReducer = (state, action) => {
  const {
    type,
    payload: { authLoading, isAuthenticated },
  } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        authLoading,
        isAuthenticated,
      };

    default:
      return state;
  }
};
