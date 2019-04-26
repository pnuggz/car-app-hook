import { carLocationsApi } from "./carLocationsInputApi";

export function loadCarLocations() {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const token = userInfo.token;
  try {
    const fetch = carLocationsApi(token);
    return fetch;
  } catch (error) {
    return error;
  }
}
