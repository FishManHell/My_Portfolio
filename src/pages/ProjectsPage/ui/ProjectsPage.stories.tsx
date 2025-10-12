import type {Meta, StoryObj} from '@storybook/react';
import ProjectsPage from "./ProjectsPage";
import {projectCards as mockProjects} from "entities/Projects";

const meta = {
    title: 'pages/ProjectsPage',
    component: ProjectsPage,
    tags: ['autodocs'],

} satisfies Meta<typeof ProjectsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        mockProjects
    }
};
