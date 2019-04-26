import { loginFormReducer } from "./components/loginFormComponent/index";

export const initialState = {
  loginForm: {
    username: "",
    password: ""
  }
};

export const loginPageReducer = ({ loginForm }, action) => ({
  loginForm: loginFormReducer(loginForm, action)
});
