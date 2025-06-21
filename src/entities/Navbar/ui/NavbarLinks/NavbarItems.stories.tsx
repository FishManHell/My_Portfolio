import type {Meta, StoryObj} from '@storybook/react';
import {NavbarLinks} from "./NavbarLinks";

const meta = {
    title: 'pages/NavbarLinks',
    component: NavbarLinks,
    tags: ['autodocs'],

} satisfies Meta<typeof NavbarLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
