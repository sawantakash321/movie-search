import axios from "axios";
import { config } from "../config";

axios.defaults.params = {};

const api = function() {
  return axios.create({
    baseURL: config.apiUrl,
    timeout: 10000,
  });
};

const GET = async (url, params = {}) => {
  const response = await api().get(url, { params });
  return response;
};


// api() services
export const getMovieSuggestions = data => GET(null, {s: data});
export const getMovieDetails = data => GET(null, {i: data});
