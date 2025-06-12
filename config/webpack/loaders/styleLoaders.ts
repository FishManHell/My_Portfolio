import {BuildOptions} from "../types";

export const styleLoaders = (options: BuildOptions) => {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ]
    }
}