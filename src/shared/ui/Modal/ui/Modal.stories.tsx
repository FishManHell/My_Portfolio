import type {Meta, StoryObj} from '@storybook/react';
import {Modal} from "./Modal";

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    args: {children: <div>Hello</div>}

} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
