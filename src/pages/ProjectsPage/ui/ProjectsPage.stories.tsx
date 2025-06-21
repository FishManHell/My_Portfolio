import type {Meta, StoryObj} from '@storybook/react';
import ProjectsPage from "./ProjectsPage";

const meta = {
    title: 'pages/ProjectsPage',
    component: ProjectsPage,
    tags: ['autodocs'],

} satisfies Meta<typeof ProjectsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
