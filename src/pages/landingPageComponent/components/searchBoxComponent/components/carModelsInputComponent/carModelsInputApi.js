export const carModelsApi = token => {
  const url = `http://api.dailysportboss.com/carapp/models`;
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
};
