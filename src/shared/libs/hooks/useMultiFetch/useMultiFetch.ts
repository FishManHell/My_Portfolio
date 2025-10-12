import {useState} from "react";
import {AxiosError} from "axios";
import {callApi, HttpMethod} from "shared/api/callApi";
import {useInitialEffect} from "../useInitialEffect/useInitialEffect";

interface RequestItem<T> {
    method: HttpMethod;
    url: string;
    payload?: unknown
}

export type RequestsType<T extends unknown[]> = {
    readonly [K in keyof T]: RequestItem<T[K]>
};

export const useMultiFetch = <T extends unknown[]>(requests: RequestsType<T>) => {
    const [results, setResults] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<AxiosError | null>(null);

    const modifRequests = ()=> {
        return requests.map(({method, payload, url}, index) => {
            return callApi<T[typeof index]>(method, url, payload).then(res => res.data)
        })
    }

    const fetchAll = async () => {
        setLoading(true);
        setError(null);
        try {
            const requests = modifRequests();
            const response = await Promise.all(requests);
            setResults(response as T)
        } catch (error) {
            setError(error as AxiosError);
        } finally {
            setLoading(false);
        }
    }

    useInitialEffect(() => {
        fetchAll()
    });

    return {loading, error, results};
}