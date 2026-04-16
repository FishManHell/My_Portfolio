type WithCreatedAt = {
    createdAt?: string | Date | null;
};

export function sortByCreatedAtDesc<T extends WithCreatedAt>(data: T[]): T[] {
    return [...data].sort((a, b) => {
        const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;

        return timeB - timeA;
    });
}