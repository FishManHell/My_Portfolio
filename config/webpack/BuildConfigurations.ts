import {BuildOptions} from "./types";
import webpack from "webpack";
import {devServerBuild} from "./devServerBuild";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export const BuildConfigurations = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths: {entry, build: path}, isDev} = options;
    const devtool = isDev ? 'inline-source-map' : undefined;

    const devServer = isDev ? devServerBuild(options) : undefined;
    const plugins = buildPlugins(options);
    const rules = buildLoaders(options);
    const resolve = buildResolvers(options)

    return {
        entry,
        mode,
        devtool,
        devServer,
        plugins,
        module: {rules},
        output: {
            filename: "[name].[contenthash].js",
            path,
            clean: true,
            publicPath: '/'
        },
        resolve,
    }
}