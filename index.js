module.exports = {
    "parser": "babel-eslint",

    "plugins": [
        "react",
        "flowtype",
        "flowtype-errors",
        "jest"
    ],

    "extends": [
        "idiomatic",
        "plugin:flowtype/recommended"
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
        "complexity": [ 1, 5 ],
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

        "flowtype-errors/show-errors": 2,

        "flowtype/boolean-style": [ 2, "boolean" ],
        "flowtype/define-flow-type": 1,
        "flowtype/delimiter-dangle": [ 2, "never" ],
        "flowtype/generic-spacing": [ 2, "never" ],
        "flowtype/no-primitive-constructor-types": 2,
        "flowtype/no-weak-types": 0,
        "flowtype/object-type-delimiter": [ 2, "comma" ],
        "flowtype/require-parameter-type": 0,
        "flowtype/require-return-type": [ 0, "always", { "annotateUndefined": "never" } ],
        "flowtype/require-valid-file-annotation": 0,
        "flowtype/semi": [ 2, "always" ],
        "flowtype/space-after-type-colon": [ 2, "always" ],
        "flowtype/space-before-generic-bracket": [ 2, "never" ],
        "flowtype/space-before-type-colon": [ 2, "never" ],
        "flowtype/type-id-match": [ 2, "^([A-Z][a-z0-9]*)+$" ],
        "flowtype/union-intersection-spacing": [ 2, "always" ],
        "flowtype/use-flow-type": 1,
        "flowtype/valid-syntax": 1,

        "jest/no-disabled-tests": 2,
        "jest/no-focused-tests": 2,
        "jest/no-identical-title": 2

    },

    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true
        }
    }
};
