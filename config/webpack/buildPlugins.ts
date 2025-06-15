import {BuildOptions} from "./types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({isDev, apiUrl, paths: {html: template}}: BuildOptions): webpack.WebpackPluginInstance[] => {

    const devPlugins = [
        new ReactRefreshWebpackPlugin({
            overlay: false, // leave it here for now
        }),
        new webpack.HotModuleReplacementPlugin()
    ]

    const plugins = [
        new HtmlWebpackPlugin({
            template
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API_URL__: JSON.stringify(apiUrl)
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ]

    if (isDev) plugins.push(...devPlugins)

    return plugins
}