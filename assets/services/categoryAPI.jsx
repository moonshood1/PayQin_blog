import React from "react";
import axios from "axios";
import { CATEGORY_API } from "../config";

function find(id) {
  return axios.get(CATEGORY_API + "/" + id).then((response) => response.data);
}

function update(id, category) {
  return axios.put(CATEGORY_API + "/" + id, category);
}

function create(category) {
  return axios.post(CATEGORY_API, category);
}

function suppress(id) {
  return axios.delete(CATEGORY_API + "/" + id);
}

export default {
  find,
  update,
  create,
  suppress,
};
