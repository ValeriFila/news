import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/config'

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {
        paths,
        mode,
        isDev,
    } = options

    return {
        mode,
        devtool: isDev ? 'inline-source-map' : undefined,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.dist,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
