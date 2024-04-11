import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export const buildPlugins = ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ]
}
