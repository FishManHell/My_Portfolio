import {BuildOptions} from "./types";
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const devServerBuild = ({isDev, port}: BuildOptions): DevServerConfiguration => {
    if (!isDev) return undefined;
    return {
        port,
        open: true,
        hot: true,
    }
}