module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/env",
            {
                modules: 'auto',
                targets: {
                    "browsers": [ ">0.25%", "not ie 11", "not op_mini all"]
                },

                useBuiltIns: 'entry',
                corejs: '3.9.0',
            }
        ],
        ['@babel/react'],
        ['@babel/preset-typescript']
    ];

    const plugins = [
        [
            '@babel/plugin-syntax-dynamic-import',
        ],
        [
            '@babel/plugin-proposal-object-rest-spread',
        ],
        [
            '@babel/plugin-proposal-decorators',
            {
                'legacy': true
            }
        ],
        [
            '@babel/plugin-proposal-class-properties',
            {
                'loose': true
            }
        ]
    ];

    return {
        presets,
        plugins
    };
};
