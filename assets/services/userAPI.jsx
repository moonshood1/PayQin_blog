import React from "react";
import axios from "axios";
import { LOGIN_API } from "../config";

function create(user) {
  return axios.post(LOGIN_API, user);
}

export default {
  create,
};
