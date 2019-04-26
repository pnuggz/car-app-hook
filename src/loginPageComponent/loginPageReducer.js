import { loginFormReducer } from "./reducers/loginFormReducer";

export const initialState = {
  loginForm: {
    username: "",
    password: ""
  }
};

export const loginPageReducer = ({ loginForm }, action) => ({
  loginForm: loginFormReducer(loginForm, action)
});
