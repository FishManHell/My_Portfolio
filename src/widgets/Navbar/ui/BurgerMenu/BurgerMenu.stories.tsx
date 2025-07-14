import type {Meta, StoryObj} from '@storybook/react';
import {BurgerMenu} from "./BurgerMenu";
import {action} from "@storybook/addon-actions";

const meta = {
    title: 'widgets/BurgerMenu',
    component: BurgerMenu,
    tags: ['autodocs'],

} satisfies Meta<typeof BurgerMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = {
    args: {
        isOpen: false,
        onToggle: action("onToggle")
    }
};

export const Open: Story = {
    args: {
        isOpen: true,
        onToggle: action("onToggle")
    }
};
