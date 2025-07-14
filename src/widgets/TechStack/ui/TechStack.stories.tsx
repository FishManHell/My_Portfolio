import type {Meta, StoryObj} from '@storybook/react';
import {TechStack} from "./TechStack";

const meta = {
    title: 'widgets/TechStack',
    component: TechStack,
    tags: ['autodocs'],

} satisfies Meta<typeof TechStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        techStackList: [
            {id: '1', icon_key: 'github'},
            {id: '1', icon_key: 'javascript'}
        ]
    }
};

export const Loader: Story = {
    args: {
        techStackLoading: true
    }
};