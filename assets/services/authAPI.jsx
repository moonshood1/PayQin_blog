import React from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

function logout() {
  window.localStorage.removeItem("token");
  delete axios.defaults.headers["Authorization"];
}

function authenticate(credentials) {
  return axios
    .post("http://127.0.0.1:8000/api/login_check", credentials)
    .then((res) => res.data.token)
    .then((token) => {
      // Stockage du token dans le local storage
      window.localStorage.setItem("token", token);

      // Toutes les futures requetes auront un header avec autorization = token
      setAxiosToken(token);

      return true;
    });
}

function setAxiosToken(token) {
  axios.defaults.headers["Authorization"] = "Bearer " + token;
}

function setup() {
  // 1 voir si on a un token
  const token = window.localStorage.getItem("token");

  // 2 si le token est encore valide
  if (token) {
    const { exp: expiration } = jwtDecode(token);
    if (expiration * 1000 > new Date().getTime()) {
      setAxiosToken(token);
    }
  }
}

function isAuthenticated() {
  const token = window.localStorage.getItem("token");
  if (token) {
    const { exp: expiration } = jwtDecode(token);
    if (expiration * 1000 > new Date().getTime()) {
      return true;
    }
    return false;
  }
  return false;
}

function getUser() {
  const token = window.localStorage.getItem("token");
  const jwtData = jwtDecode(token);
  return jwtData.username;
}

export default {
  authenticate,
  logout,
  setup,
  isAuthenticated,
  getUser,
};
