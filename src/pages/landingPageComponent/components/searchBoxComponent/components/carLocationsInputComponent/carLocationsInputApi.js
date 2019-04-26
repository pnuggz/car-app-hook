export const carLocationsApi = token => {
  const url = `http://api.dailysportboss.com/carapp/locations`;
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
};
