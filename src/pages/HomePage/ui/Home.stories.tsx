import type {Meta, StoryObj} from '@storybook/react';
import HomePage from "./HomePage";

const meta = {
    title: 'pages/HomePage',
    component: HomePage,
    tags: ['autodocs'],

} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
