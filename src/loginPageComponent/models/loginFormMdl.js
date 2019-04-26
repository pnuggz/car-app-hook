import { loginFormApi } from "../apis/loginFormApi";
import history from "../../lib/history";

export function loginFormRequest(username, password) {
  try {
    const fetch = loginFormApi(username, password);

    fetch
      .then(login => login.json())
      .then(login => {
        if (login.token) {
          let token = login.token;
          let userData = login.data;
          let userInfo = {
            token: token,
            token_date: Date.now(),
            data: userData
          };
          sessionStorage.setItem("userInfo", JSON.stringify(userInfo));

          //eslint-disable-next-line
          history.push("/");
        } else {
          return login.error.message;
        }
      });
  } catch (error) {
    return error;
  }
}
