export const loginFormReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME_FORM":
      return {
        ...state,
        username: action.payload
      };

    case "SET_PASSWORD_FORM":
      return {
        ...state,
        password: action.payload
      };

    default:
      return state;
  }
};
