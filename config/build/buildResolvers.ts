import webpack from 'webpack'

export const buildResolvers = (): webpack.ResolveOptions => {
    return {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        extensionAlias: {
            '.js': ['.js', '.ts'],
            '.cjs': ['.cjs', '.cts'],
            '.mjs': ['.mjs', '.mts'],
        },
    }
}
