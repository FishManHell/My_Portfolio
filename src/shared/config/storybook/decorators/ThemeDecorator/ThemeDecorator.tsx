import {Theme, ThemeProvider} from "app/providers/ThemeProvider";
import {StoryFn} from "@storybook/react";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
    document.body.className = theme;
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    )
};