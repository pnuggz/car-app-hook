let url = "http://api.dailysportboss.com/login/submit";

export const loginFormApi = (username, password) => {
  const data = `username=${encodeURI(username)}&password=${encodeURI(
    password
  )}`;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: data
  });
};
