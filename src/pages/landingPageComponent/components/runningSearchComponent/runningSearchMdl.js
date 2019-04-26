import { runningSearchApi } from "./runningSearchApi";

export function loadRunningSearch() {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const token = userInfo.token;
  try {
    // const runningSearch = yield call(runningSearchAPI, token);
    const fetch = runningSearchApi(token);
    return fetch;

    // fetch
    //   .then(response => response.json())
    //   .then(response => {
    //     return {
    //       runningSearch: {
    //         successful: true,
    //         results: response.data
    //       }
    //     };
    //   });
  } catch (error) {
    return {
      runningSearch: {
        successful: false,
        error: error
      }
    };
  }
}
