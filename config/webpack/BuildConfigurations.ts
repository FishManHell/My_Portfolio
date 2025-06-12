import {BuildOptions} from "./types";
import webpack from "webpack";
import {devServerBuild} from "./devServerBuild";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";

export const BuildConfigurations = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths: {entry, build: path}, isDev} = options;
    const devtool = isDev ? 'inline-source-map' : undefined;

    const devServer = devServerBuild(options);
    const plugins = buildPlugins(options);
    const loaders = buildLoaders(options);

    return {
        entry,
        mode,
        devtool,
        devServer,
        plugins,
        module: {
            rules: loaders
        },
        output: {
            filename: "[name].[contenthash].js",
            path,
            clean: true
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    }
}