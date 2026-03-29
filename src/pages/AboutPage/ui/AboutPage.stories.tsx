import type {Meta, StoryObj} from '@storybook/react';
import AboutPage from "./AboutPage";
import {baseEducationCard, baseExperienceCard} from "shared/ui/TimelineCard/mocks/baseCards";

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],

} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        mockResults: [[baseExperienceCard], [baseEducationCard], {text: "Test"}]
    }
};
