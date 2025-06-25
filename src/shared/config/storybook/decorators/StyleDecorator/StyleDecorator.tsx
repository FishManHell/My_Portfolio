import { StoryFn, StoryContext} from "@storybook/react";

const StyleDecorator = (Story: StoryFn, context: StoryContext) => {
    const theme = context.globals.theme || 'light'
    return (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    )
};

export default StyleDecorator;