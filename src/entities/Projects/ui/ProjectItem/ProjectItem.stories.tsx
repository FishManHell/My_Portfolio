import type {Meta, StoryObj} from '@storybook/react';
import {ProjectItem} from "./ProjectItem";
import {projectCard} from "entities/Projects";

const meta = {
    title: 'entities/ProjectItem',
    component: ProjectItem,
    tags: ['autodocs'],

} satisfies Meta<typeof ProjectItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        project: projectCard
    }
};
