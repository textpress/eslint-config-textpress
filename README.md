# eslint-config

[Shared eslint config](http://eslint.org/docs/developer-guide/shareable-configs). 

How to use:

- `yarn add --dev @textpress/eslint-config-textpress`
- Create the following `.eslintrc` file:

```
{
    "extends": "@textpress/eslint-config-textpress"
}
```


When making changes, you can use 
[`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/) to test your rules locally before committing.
