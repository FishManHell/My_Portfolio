import {BuildOptions} from "../types";

export const tsLoaders = (options: BuildOptions) => {
    return {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
}