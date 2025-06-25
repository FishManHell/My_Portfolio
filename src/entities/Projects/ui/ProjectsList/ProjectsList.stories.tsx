import type {Meta, StoryObj} from '@storybook/react';
import {ProjectsList} from "./ProjectsList";

const meta = {
    title: 'entities/ProjectsList',
    component: ProjectsList,
    tags: ['autodocs'],

} satisfies Meta<typeof ProjectsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
