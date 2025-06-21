import type {Meta, StoryObj} from '@storybook/react';
import {Card} from "./Card";

const meta = {
    title: 'pages/Card',
    component: Card,
    tags: ['autodocs'],

} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
