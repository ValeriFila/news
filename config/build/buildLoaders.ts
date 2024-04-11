import webpack from 'webpack'

export const buildLoaders = (): webpack.RuleSetRule[] => {
    const tsLoader = {
        test: /\.([cm]?ts|tsx)$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
        exclude: /node-modules/,
    }
    const stylesLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    sassOptions: {
                        indentWidth: 4,
                        includePaths: ['absolute/path/a', 'absolute/path/b'],
                    },
                },
            },
        ],
    }

    return [
        tsLoader,
        stylesLoaders,
    ]
}
