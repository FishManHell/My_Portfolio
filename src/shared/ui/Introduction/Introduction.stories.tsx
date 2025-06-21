import type {Meta, StoryObj} from '@storybook/react';
import {Introduction} from "./Introduction";

const meta = {
    title: 'pages/Introduction',
    component: Introduction,
    tags: ['autodocs'],

} satisfies Meta<typeof Introduction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
