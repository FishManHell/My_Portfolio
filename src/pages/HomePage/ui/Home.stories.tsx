import type {Meta, StoryObj} from '@storybook/react';
import HomePage from "./HomePage";
import {projectCard} from "entities/Projects";

const meta = {
    title: 'pages/HomePage',
    component: HomePage,
    tags: ['autodocs'],

} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        mockResults: [
            [{id: '1', icon_key: 'javascript'}, {id: '2', icon_key: "github"}],
            [projectCard]
        ]
    }
};
