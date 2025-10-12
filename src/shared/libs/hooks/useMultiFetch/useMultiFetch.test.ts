import { renderHook, waitFor } from "@testing-library/react";
import { useMultiFetch } from "./useMultiFetch";
import { createAxiosError, createAxiosResponse, mockedCallApi } from "shared/tests";

describe("useMultiFetch", () => {
    beforeEach(() => jest.clearAllMocks());

    test("Fulfilled", async () => {
        const fakeData1 = { foo: "bar" };
        const fakeData2 = { baz: "qux" };

        mockedCallApi
            .mockResolvedValueOnce(createAxiosResponse(fakeData1))
            .mockResolvedValueOnce(createAxiosResponse(fakeData2));

        const requests = [
            { method: "get", url: "/api/foo" },
            { method: "post", url: "/api/bar", payload: { id: 1 } },
        ] as const;

        const { result } = renderHook(() => useMultiFetch(requests));
        await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.results).toEqual([fakeData1, fakeData2]);
        expect(result.current.error).toBeNull();
        expect(mockedCallApi).toHaveBeenCalledTimes(2);
    });

    test("Pending", async () => {
        mockedCallApi.mockResolvedValue(createAxiosResponse({ data: "test" }));

        const requests = [{ method: "get", url: "/test" }] as const;
        const { result } = renderHook(() => useMultiFetch(requests));
        expect(result.current.loading).toBe(true);

        await waitFor(() => expect(result.current.loading).toBe(false));
    });

    test("Rejected", async () => {
        const fakeError = createAxiosError("Server error");

        mockedCallApi
            .mockResolvedValueOnce(createAxiosResponse({ ok: true }))
            .mockRejectedValueOnce(fakeError);

        const requests = [
            { method: "get", url: "/api/ok" },
            { method: "get", url: "/api/fail" },
        ] as const;

        const { result } = renderHook(() => useMultiFetch(requests));
        await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.results).toBeNull();
        expect(result.current.error).toBe(fakeError);
    });
});
