import {AxiosResponse} from "axios";
import {$api} from "./api";

export type HttpMethod = 'get' | 'post' | 'put' | 'delete';

/**
 * Универсальный вызов API с типизацией.
 *
 * @param method - HTTP метод (get, post, put, delete)
 * @param url - URL эндпоинта
 * @param payload - данные для post/put (или config для get/delete)
 * @returns Promise с типизированными данными
 */

export const callApi = async <T = any>(
    method: HttpMethod, url: string, payload?: any
): Promise<AxiosResponse<T>> => {
    console.log(method, "method", url, "url")
    return await $api[method](url, payload);
};