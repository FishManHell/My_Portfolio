export type Mode = 'production' | 'development'

export interface Env {
    mode: Mode;
    port: number;
    apiUrl: string
}

export interface BuildPaths {
    html: string;
    build: string;
    entry: string;
    src: string
}

export interface BuildOptions {
    mode: Mode;
    paths: BuildPaths;
    apiUrl: string;
    isDev: boolean;
    port: number;
}