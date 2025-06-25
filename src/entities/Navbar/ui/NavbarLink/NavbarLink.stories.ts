import type {Meta, StoryObj} from '@storybook/react';
import {NavbarLink} from "./NavbarLink";

const meta = {
    title: 'entities/NavbarLink',
    component: NavbarLink,
    tags: ['autodocs'],

} satisfies Meta<typeof NavbarLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        item: {
            text: 'About',
            path: '/about'
        }
    }
};
