import type {Meta, StoryObj} from '@storybook/react';
import {SectionHeader} from "./SectionHeader";

const meta = {
    title: 'shared/SectionHeader',
    component: SectionHeader,
    tags: ['autodocs'],
    args: {
        title: 'Section Header',
        subtitle: 'Subtitle'
    }

} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const OnlyTitle: Story = {
    args: {
        subtitle: undefined
    }
}

export const OnlySubtitle: Story = {
    args: {
        title: undefined
    }
}