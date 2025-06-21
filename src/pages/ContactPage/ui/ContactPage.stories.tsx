import type {Meta, StoryObj} from '@storybook/react';
import ContactPage from "./ContactPage";

const meta = {
    title: 'pages/ContactPage',
    component: ContactPage,
    tags: ['autodocs'],

} satisfies Meta<typeof ContactPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
