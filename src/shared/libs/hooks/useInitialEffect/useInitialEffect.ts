import { useEffect } from "react";

export function useInitialEffect(
    callback: () => void,
    project: string = __PROJECT__ // default state, was added because didn't find any solution for test
) {
    useEffect(() => {
        if (project !== "storybook") {
            callback();
        }
    }, []);
}
