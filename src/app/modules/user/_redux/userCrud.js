import axios from "axios";

const USER_URL = "https://dummyapi.io/data/v1/user";

export const getUsers = () => {
  return axios.get(`${USER_URL}?limit=12`);
};

export const getUser = (userId) => {
  return axios.get(`${USER_URL}/${userId}`);
};