import axios from "axios";

const POST_URL = "https://dummyapi.io/data/v1/post";

export const getPosts = () => {
  return axios.get(`${POST_URL}?limit=12`);
};