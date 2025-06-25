import type {Preview} from '@storybook/react'
import 'app/styles/index.scss'
import {StyleDecorator, RouterDecorator, ThemeDecorator} from "shared/config/storybook";
import {Theme} from "app/providers/ThemeProvider";

const decorators = [
    StyleDecorator,
    RouterDecorator,
    ThemeDecorator(Theme.LIGHT)
]

const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            toolbar: {
                title: 'Theme',
                icon: 'mirror',
                items: ['app-light-theme', 'app-dark-theme'],
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        theme: 'app-light-theme',
    },
    decorators,
    parameters: {
        layout: 'fullscreen',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;