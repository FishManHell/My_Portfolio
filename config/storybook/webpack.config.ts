import webpack, {RuleSetRule, DefinePlugin} from "webpack";
import path from "path";
import {styleLoaders} from "../webpack/loaders/styleLoaders";
import {BuildPaths} from "../webpack/types";

export default ({config}: {config: webpack.Configuration}) => {
    const styleLoader = styleLoaders(true);

    const {src}: BuildPaths = {
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        entry: '',
        html: '',
    }

    config!.resolve!.modules!.unshift(src);
    config!.resolve!.extensions!.push('.ts', '.tsx');

    config!.module!.rules!.push(styleLoader);

    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
    }))

    return config
}