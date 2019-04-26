import { carMakersApi } from "./carMakersInputApi";

export function loadCarMakers() {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const token = userInfo.token;
  try {
    const fetch = carMakersApi(token);
    return fetch;
  } catch (error) {
    return error;
  }
}
