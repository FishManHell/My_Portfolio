import type {Meta, StoryObj} from '@storybook/react';
import {Card} from "./Card";

const meta = {
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
    args: {
        children: <div>Hello</div>
    }

} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
