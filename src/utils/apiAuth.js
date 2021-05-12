export const BASE_URL = "https://auth.nomoreparties.co";

export const checkResponse = (res) => {
  return res.ok
    ? res.json
    : Promise.reject(new Error(`Ошибка ${res.status}: ${res.statusText}`));
};

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const register = ({ password, email }) => {
  return fetch(`${BASE_URL}/signup`, {
    headers,
    method: "POST",
    body: JSON.stringify({ password, email }),
  }).then((res) => checkResponse(res));
};

export const authorize = ({ password, email }) => {
  return fetch(`${BASE_URL}/signin`, {
    headers,
    method: "POST",
    body: JSON.stringify({ password, email }),
  }).then((res) => checkResponse(res));
};

export const getContent = ({ JWT }) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: { ...headers, Authorization: `Bearer ${JWT}` },
    method: "GET",
  }).then((res) => checkResponse(res));
};
