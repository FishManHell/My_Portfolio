export function createMockList<T extends { id: string }>(
    base: T,
    count: number
): T[] {
    return Array.from({ length: count }, (_, i) => ({
        ...base,
        id: String(i + 1),
    }));
}