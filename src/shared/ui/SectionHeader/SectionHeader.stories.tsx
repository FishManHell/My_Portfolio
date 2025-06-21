import type {Meta, StoryObj} from '@storybook/react';
import {SectionHeader} from "./SectionHeader";

const meta = {
    title: 'pages/SectionHeader',
    component: SectionHeader,
    tags: ['autodocs'],

} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
