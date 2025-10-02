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
        techStackList: [{name: "git"}, {name: "js"}]
    }
};

export const Loader: Story = {
    args: {
        techStackLoading: true
    }
};