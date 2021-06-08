import React from "react";
import axios from "axios";

function find(id) {
  return axios
    .get("http://127.0.0.1:8000/api/articles/" + id)
    .then((response) => response.data);
}

function update(id, article) {
  return axios.put("http://127.0.0.1:8000/api/articles/" + id, article);
}

function create(article) {
  return axios.post("http://127.0.0.1:8000/api/articles", article);
}

function suppress(id) {
  return axios.delete("http://127.0.0.1:8000/api/articles/" + id);
}

function fetch() {
  return axios
    .get("http://127.0.0.1:8000/api/articles")
    .then((response) => response.data);
}

export default {
  find,
  update,
  create,
  suppress,
  fetch,
};
