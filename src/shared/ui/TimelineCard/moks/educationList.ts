import { baseEducationCard } from './baseCards';

export const educationList = Array.from({ length: 4 }, (_, i) => ({
    ...baseEducationCard,
    id: `${i + 1}`,
}));

