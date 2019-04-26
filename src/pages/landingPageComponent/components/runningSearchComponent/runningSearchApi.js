export const runningSearchApi = token => {
  const url = `http://api.dailysportboss.com/carapp/search`;
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
};
