import React from "react";
import axios from "axios";
import { USER_API } from "../config";

function create(user) {
  return axios.post(USER_API, user);
}

export default {
  create,
};
