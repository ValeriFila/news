import path from 'path'
import { WebpackConfiguration } from 'webpack-cli'
import { buildWebpackConfig } from 'config/build/buildWebpackConfig'
import { BuildEnv, BuildPaths } from 'config/build/types/config'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        dist: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const port = env.port || 3000
    const mode = env.mode || 'development'
    const isDev = env.mode === 'development'

    const config: WebpackConfiguration = buildWebpackConfig({
        mode,
        paths,
        port,
        isDev,
    })

    return config
}
