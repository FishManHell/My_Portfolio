import {BuildOptions} from "./types";
import {tsLoaders} from "./loaders/tsLoaders";
import {RuleSetRule} from "webpack";
import {styleLoaders} from "./loaders/styleLoaders";
import {svgLoaders} from "./loaders/svgLoader";

export const buildLoaders = ({isDev}: BuildOptions): RuleSetRule[] => {
    const tsLoader = tsLoaders();
    const styleLoader = styleLoaders(isDev);
    const svgLoader = svgLoaders()
    return [
        svgLoader,
        tsLoader,
        styleLoader
    ]
}