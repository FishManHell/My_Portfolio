import {AxiosResponse} from "axios";
import {$api} from "./api";

export type HttpMethod = 'get' | 'post' | 'put' | 'delete';

/**
 * Universal Api call type.
 *
 * @param method - HTTP method (get, post, put, delete)
 * @param url - Url endpoint
 * @param payload - Some data for POST/PUT or config for GET/DELETE
 * @returns Promise with typing data
 */


export const callApi = async <T = any>(
    method: HttpMethod, url: string, payload?: any
): Promise<AxiosResponse<T>> => {
    return await $api[method](url, payload);
};