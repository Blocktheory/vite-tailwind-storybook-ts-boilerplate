import { AxiosResponse } from "axios";

import { TResponse } from "../types";
import axiosInstance from "./httpInterceptor";
export const globalGetService = <TParamType>(
    url: string,
    params: TParamType,
    signal?: any,
    baseURL: string | undefined = axiosInstance.defaults.baseURL,
): Promise<TResponse> => {
    return new Promise(function (resolve, reject) {
        axiosInstance({
            method: "GET",
            url: url,
            params: params,
            baseURL: baseURL,
            signal: signal,
        })
            .then((response: AxiosResponse<TResponse>) => {
                const _response: TResponse = {
                    data:
                        baseURL !== axiosInstance.defaults.baseURL
                            ? response.data
                            : response.data.data,
                    statusCode: response.status,
                    message: response.statusText,
                };
                resolve(_response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const globalApiService = <TDataType>(
    url: string,
    data: TDataType,
    baseURL: string | undefined = axiosInstance.defaults.baseURL,
    method: string,
): Promise<TResponse> => {
    return new Promise(function (resolve, reject) {
        axiosInstance({
            method: method,
            url: url,
            data: data,
            baseURL: baseURL,
        })
            .then((response: AxiosResponse<TResponse>) => {
                const _response: TResponse = {
                    data:
                        baseURL !== axiosInstance.defaults.baseURL
                            ? response.data
                            : response.data.data,
                    statusCode: response.status,
                    message: response.statusText,
                };
                resolve(_response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
