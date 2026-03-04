import axios from "axios";

const AUTH_URL = "http://host/auth";

export default {
  login(credentials) {
    return axios.post(`${AUTH_URL}/login`, credentials);
  },

  register(user) {
    return axios.post(`${AUTH_URL}/register`, user);
  }
};