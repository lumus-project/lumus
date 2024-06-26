import { dirname, join } from "path";
module.exports = {
    stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        getAbsolutePath("@storybook/addon-links"),
        getAbsolutePath("@storybook/addon-essentials"),
        getAbsolutePath("@storybook/addon-interactions"),
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
        "@storybook/addon-webpack5-compiler-babel",
        "@chromatic-com/storybook"
    ],

    framework: {
        name: getAbsolutePath("@storybook/react-webpack5"),
        options: {}
    },

    docs: {
        autodocs: true
    }
};

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, "package.json")));
}
