import { baseExperienceCard } from './baseCards';

export const experienceList = Array.from({ length: 4 }, (_, i) => ({
    ...baseExperienceCard,
    id: `${i + 1}`,
}));