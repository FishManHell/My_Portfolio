import {useCallback, useEffect, useState} from "react";
import {AxiosError} from "axios";
import {callApi, HttpMethod} from "shared/api/callApi";

interface UseFetchProps {
    method: HttpMethod;
    endpoint: string;
    payload?: any;
}

export const useFetch = <T = any> ({method, endpoint, payload}: UseFetchProps) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<AxiosError | null>(null);

    const fetch = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const {data, } = await callApi(method, endpoint, payload);
            if (!data) throw new Error("Error");
            setData(data);
        } catch (err) {
            setError(err as AxiosError);
        } finally {
            setLoading(false);
        }
    }, [method, endpoint, payload]);

    useEffect(() => {
        fetch()
    }, []);

    return {data, loading, error};
}