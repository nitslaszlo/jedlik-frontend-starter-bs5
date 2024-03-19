import axios, { AxiosInstance } from "axios";

const $axios: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

export default $axios;
