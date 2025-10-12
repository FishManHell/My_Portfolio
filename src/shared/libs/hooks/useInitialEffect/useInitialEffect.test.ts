import { renderHook } from "@testing-library/react";
import { useInitialEffect } from "./useInitialEffect";

describe("useInitialEffect", () => {
    test("test if project !== 'storybook'", () => {
        const callback = jest.fn();
        renderHook(() => useInitialEffect(callback, "jest"));
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test("test if project === 'storybook'", () => {
        const callback = jest.fn();
        renderHook(() => useInitialEffect(callback, "storybook"));
        expect(callback).not.toHaveBeenCalled();
    });
});
