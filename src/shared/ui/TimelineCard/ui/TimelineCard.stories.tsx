import type {Meta, StoryObj} from '@storybook/react';
import {TimelineCard} from "./TimelineCard";

const meta = {
    title: 'pages/TimelineCard',
    component: TimelineCard,
    tags: ['autodocs'],

} satisfies Meta<typeof TimelineCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
