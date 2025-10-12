import {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from "axios";

/**
 * Creates a mock successful Axios response.
 * @param data - The data to be returned by Axios.
 */
export const createAxiosResponse = <T>(data: T): AxiosResponse<T> => ({
    data,
    status: 200,
    statusText: "OK",
    headers: {},
    config: {headers: {},} as InternalAxiosRequestConfig,
});

/**
 * Creates a mock Axios error.
 * @param message - The error message.
 * @param status - The HTTP status code (default is 500).
 */

export const createAxiosError = <T = unknown>(message: string, status = 500): AxiosError<T> => {
    const config = { headers: {} } as InternalAxiosRequestConfig;

    const response: AxiosResponse<T> = {
        data: {} as T,
        status,
        statusText: message,
        headers: {},
        config,
    };

    return {
        name: "AxiosError",
        message,
        config,
        code: status.toString(),
        request: {},
        response,
        isAxiosError: true,
        toJSON: () => ({}),
    } as AxiosError<T>;
};