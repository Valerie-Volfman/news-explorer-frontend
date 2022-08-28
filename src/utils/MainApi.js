/* eslint-disable no-undef */
export const BASE_URL = "http://localhost:3001";

function generateHeaders() {
  const jwt = localStorage.getItem("jwt");
  return {
    Accept: "application/json",
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  };
}

function checkResponse(response) {
  if (!response.ok) {
    return Promise.reject(
      "Something went wrong",
      response.status,
      response.statusText
    );
  }
  return response.json();
}
export const register = ({ email, password, name }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then((res) => checkResponse(res));
};

export const authorize = (data) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: data.email, password: data.password }),
  }).then((res) => checkResponse(res));
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

export const getUserData = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: generateHeaders(),
  }).then((res) => checkResponse(res));
};

export const getArticles = () => {
  return fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: generateHeaders(),
  }).then((res) => checkResponse(res));
};

export const saveArticle = (keyword, card) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: generateHeaders(),
    body: JSON.stringify({
      keyword,
      title: card.title,
      text: card.description,
      date: card.publishedAt,
      source: card.source.name,
      image: card.urlToImage,
      link: card.url,
    }),
  }).then((res) => checkResponse(res));
};

export const deleteArticle = (id) => {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
    headers: generateHeaders(),
  }).then((res) => checkResponse(res));
};
