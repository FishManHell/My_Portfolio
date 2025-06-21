import type {Meta, StoryObj} from '@storybook/react';
import {ProjectItem} from "./ProjectItem";

const meta = {
    title: 'pages/ProjectItem',
    component: ProjectItem,
    tags: ['autodocs'],

} satisfies Meta<typeof ProjectItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
