export const carMakersApi = token => {
  const url = `http://api.dailysportboss.com/carapp/makes`;
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
};
