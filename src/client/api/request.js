import axios from "axios";
import appConfig from "configs/client";

const request = axios.create({ baseURL: appConfig.apiBase });

export default request;
