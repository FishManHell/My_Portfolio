import {BuildOptions} from "./types";
import {tsLoaders} from "./loaders/tsLoaders";
import webpack from "webpack";
import {styleLoaders} from "./loaders/styleLoaders";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const tsLoader = tsLoaders(options);
    const styleLoader = styleLoaders(options)
    return [
        tsLoader,
        styleLoader
    ]
}