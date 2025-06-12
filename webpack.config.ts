import {BuildPaths, Env} from "./config/webpack/types";
import path from 'path';
import webpack from 'webpack';
import {BuildConfigurations} from "./config/webpack/BuildConfigurations";

export default (env: Env) => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const port = env.port || 3000;
    const apiUrl = env.apiUrl || 'http://localhost:8000';

    const paths: BuildPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        src: path.resolve(__dirname, 'src')
    }

    const config: webpack.Configuration = BuildConfigurations({mode, isDev, port, paths, apiUrl})

    return config
}