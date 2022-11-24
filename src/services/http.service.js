import axios from "axios";
import config from "../config.json";

axios.defaults.baseURL = config.apiEndpoint;

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("Error");
    }
  },
);

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
