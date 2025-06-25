export const cloneList = <T extends { id: string }>(obj: T, length: number): T[] => {
    return Array.from({ length }, (_, i) => ({
        ...obj,
        id: `${i + 1}`,
    }));
};