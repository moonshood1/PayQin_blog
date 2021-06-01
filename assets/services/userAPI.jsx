import React from "react";
import axios from "axios";

function create(user) {
  return axios.post("http://127.0.0.1:8000/api/users", user);
}

export default {
  create,
};
