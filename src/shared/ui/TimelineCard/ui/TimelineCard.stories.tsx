import type {Meta, StoryObj} from '@storybook/react';
import {TimelineCard} from "./TimelineCard";
import {baseEducationCard, baseExperienceCard} from "shared/ui/TimelineCard/mocks/baseCards";

const meta = {
    title: 'shared/TimelineCard',
    component: TimelineCard,
    tags: ['autodocs'],

} satisfies Meta<typeof TimelineCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EducationCard: Story = {
    args: {
        timelineCard: baseEducationCard
    }
};

export const experienceCard: Story = {
    args: {
        timelineCard: baseExperienceCard
    }
};
