import type {Meta, StoryObj} from '@storybook/react';
import {Skeleton} from "./Skeleton";

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    args: {
        width: 100,
        height: 100,
    }

} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Circle: Story = {
    args: {
        border: "50%"
    }
};
