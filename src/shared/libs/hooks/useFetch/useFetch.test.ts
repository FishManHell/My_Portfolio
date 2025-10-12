import { renderHook } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import { useFetch } from "./useFetch";
import {createAxiosError, createAxiosResponse, mockedCallApi} from "shared/tests";

describe("useFetch", () => {
    beforeEach(() => jest.clearAllMocks());

    test("return data if we have 200 status", async () => {
        const fakeData = { foo: "bar" };
        mockedCallApi.mockResolvedValue(createAxiosResponse(fakeData));

        const { result } = renderHook(() => useFetch({ method: "get", endpoint: "/test" }));
        await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.data).toEqual(fakeData);
        expect(result.current.error).toBeNull();
    });

    test("failed fetch", async () => {
        const fakeError = createAxiosError("Network error");

        mockedCallApi.mockRejectedValue(fakeError);
        const { result } = renderHook(() => useFetch({ method: "get", endpoint: "/test" }));
        await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.data).toBeUndefined();
        expect(result.current.error).toBe(fakeError);
    });
});
