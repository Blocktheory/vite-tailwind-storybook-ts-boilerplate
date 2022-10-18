import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
} from "axios";

import { TApiResponse } from "../types";

const axiosInstance: AxiosInstance = axios.create();
export const baseURLv2: string | undefined = "";
// export const baseURLv1: string | undefined = import.meta.env.VITE_APP_BASEURL_V1;

axiosInstance.defaults.baseURL = `${baseURLv2}`;
axiosInstance.interceptors.request.use(
    function (config: AxiosRequestConfig) {
        return config;
    },
    function (error: AxiosError) {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    function (response: AxiosResponse<TApiResponse>) {
        if (response.status >= 200 && response.status <= 299) {
            return response;
        } else {
            return response;
        }
    },
    function (error: AxiosError) {
        return Promise.reject(error);
    },
);

export default axiosInstance;
