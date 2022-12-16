import axios from "axios";

const API_URL = "https://movie0706.cybersoft.edu.vn/api";

const httpClient = axios.create({
  baseURL: API_URL,
});

const setAuthHeader = (token: string) => {
  httpClient.defaults.headers.common["Authorization"] = "Bearer " + token;
};

const removeAuthHeader = () => {
  delete httpClient.defaults.headers.common["Authorization"];
};

export { httpClient, setAuthHeader, removeAuthHeader };
