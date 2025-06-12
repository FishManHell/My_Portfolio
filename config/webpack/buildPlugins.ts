import {BuildOptions} from "./types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export const buildPlugins = ({isDev, apiUrl, paths: {html: template}}: BuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API_URL__: JSON.stringify(apiUrl)
        })
    ]
}