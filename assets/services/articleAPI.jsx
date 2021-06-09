import React from "react";
import axios from "axios";
import { ARTICLES_API } from "../config";

function find(id) {
  return axios.get(ARTICLES_API + id).then((response) => response.data);
}

function update(id, article) {
  return axios.put(ARTICLES_API + "/" + id, article);
}

function create(article) {
  return axios.post(ARTICLES_API, article);
}

function suppress(id) {
  return axios.delete(ARTICLES_API + "/" + id);
}

function fetch() {
  return axios.get(ARTICLES_API).then((response) => response.data);
}

export default {
  find,
  update,
  create,
  suppress,
  fetch,
};
