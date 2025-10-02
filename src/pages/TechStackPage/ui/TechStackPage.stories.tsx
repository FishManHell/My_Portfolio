import type {Meta, StoryObj} from '@storybook/react';
import TechStackPage from "./TechStackPage";

const meta = {
    title: 'pages/TechStackPage',
    component: TechStackPage,
    tags: ['autodocs'],

} satisfies Meta<typeof TechStackPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        mockTechStacks: [
            {name: 'git'},
            {name: 'js'}
        ]
    }
};
