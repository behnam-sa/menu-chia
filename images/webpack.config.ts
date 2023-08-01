import CopyPlugin from 'copy-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';

const encoders = [
    {
        type: 'avif',
        ext: 'avif',
        options: {
            // https://sharp.pixelplumbing.com/api-output#avif
        },
    },
    {
        type: 'webp',
        ext: 'webp',
        options: {
            // https://sharp.pixelplumbing.com/api-output#avif
        },
    },
    {
        type: 'jpeg',
        ext: 'jpg',
        options: {
            // https://sharp.pixelplumbing.com/api-output#jpeg
        },
    },
];

const resolutions = [256, 512, 1024];

const generators: ImageMinimizerPlugin.Generator<unknown>[] = encoders.flatMap(
    (encoder) =>
        resolutions.map((resolution) => ({
            type: 'asset',
            filename: `[name]-${resolution}.${encoder.ext}`,
            implementation: ImageMinimizerPlugin.sharpGenerate,

            options: {
                encodeOptions: {
                    [encoder.type]: encoder.options,
                },
                resize: {
                    enabled: true,
                    width: resolution,
                    height: resolution,
                },
            },
        }))
);

const config: Configuration = {
    mode: 'production',
    entry: {},
    output: {
        path: path.resolve(__dirname, '../src/assets/menu/compressed'),
        clean: true, // Clean the output directory before emit.
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'images/menu/**.jpg',
                },
            ],
        }),
        new ImageMinimizerPlugin({
            loader: false, // Disable the default loader
            generator: generators,
        }),
    ],
};

export default config;
