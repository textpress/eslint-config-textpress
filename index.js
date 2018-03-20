module.exports = {
    "parser": "babel-eslint",

    "plugins": [
        "react",
        "jest"
    ],

    "extends": [
        "idiomatic"
    ],

    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "jest": true
    },

    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },

    "rules": {
        "brace-style": [ 2, "1tbs", { "allowSingleLine": true } ],
        "complexity": [ 1, 8 ],
        "computed-property-spacing": [ 0, "never" ],
        "curly": 0,
        "func-names": [ 0, "as-needed" ],
        "indent": [ 2, 4, { "SwitchCase": 1 } ],
        "no-inline-comments": 0,
        "no-unused-vars": 1,
        "no-use-before-define": [ 2, { "functions": false } ],
        "one-var": [ 0, "never" ],
        "one-var-declaration-per-line": [ 0, "never" ],
        "prefer-const": 1,
        "quotes": [ 2, "double", { "avoidEscape": true } ],
        "no-trailing-spaces": 0,
        "space-before-function-paren": 0,
        "space-in-parens": [ "error", "always" ],

        "react/prefer-es6-class": 1,
        "react/jsx-filename-extension": 0,
        "react/jsx-curly-spacing": [ 0, "always" ],
        "react/jsx-indent": [ 2, 4 ],
        "react/jsx-uses-vars": 1,
        "react/jsx-uses-react": 1,

        "jest/no-disabled-tests": 2,
        "jest/no-focused-tests": 2,
        "jest/no-identical-title": 2

    }
};
