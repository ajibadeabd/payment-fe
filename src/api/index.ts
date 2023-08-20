import axios from "axios";
const apiUrl =
   "http://0.0.0.0:8000"
  // "https://rust-version-control-api.shuttleapp.rs";
// "https://rust-version-control-api.shuttleapp.rs"
// VITE_API_BASE_URL="https://api.enif.ai"

const instance = axios.create({
  baseURL: apiUrl,
});
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
