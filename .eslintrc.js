module.exports = {
    extends: 'airbnb',
    plugins: [
        'react',
    ],
    rules: {
        indent: [2, 4],
        'no-var': 0,
        'newline-after-var': [2, 'always'],

        // REACT
        'react/jsx-indent-props': [2, 4],

        'valid-jsdoc': [
            2,
            {
                prefer: {
                    return: 'return',
                },
                requireReturn: false,
                requireParamDescription: false,
                requireReturnDescription: false,
            },
        ],
    },
};
