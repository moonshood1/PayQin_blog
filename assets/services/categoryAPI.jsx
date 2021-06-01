import React from "react";
import axios from "axios";

function find(id) {
  return axios
    .get("http://127.0.0.1:8000/api/categories/" + id)
    .then((response) => response.data);
}

function update(id, category) {
  return axios.put("http://127.0.0.1:8000/api/categories/" + id, category);
}

function create(category) {
  return axios.post("http://127.0.0.1:8000/api/categories", category);
}

export default {
  find,
  update,
  create,
};
