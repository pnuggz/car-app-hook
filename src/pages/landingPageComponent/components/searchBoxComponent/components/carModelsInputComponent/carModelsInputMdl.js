import { carModelsApi } from "./carModelsInputApi";

export function loadCarModels() {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const token = userInfo.token;
  try {
    const fetch = carModelsApi(token);
    return fetch;
  } catch (error) {
    return error;
  }
}
