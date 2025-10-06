import {BuildOptions} from "./types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import {WebpackPluginInstance, HotModuleReplacementPlugin, ProgressPlugin, DefinePlugin} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({isDev, project, paths: {html: template}}: BuildOptions): WebpackPluginInstance[] => {

    const devPlugins = [
        new ReactRefreshWebpackPlugin({
            overlay: false, // leave it here for now
        }),
        new HotModuleReplacementPlugin()
    ]

    const plugins = [
        new HtmlWebpackPlugin({template}),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            // __API_URL__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project)
        }),
    ]

    if (isDev) plugins.push(...devPlugins)

    return plugins
}