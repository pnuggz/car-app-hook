import history from "../../lib/history";

export function logoutRequest() {
  // remove our token
  sessionStorage.removeItem("userInfo");

  // redirect to the /login screen
  //eslint-disable-next-line
  history.push("/");
}
