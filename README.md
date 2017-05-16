# eslint-config

[Shared eslint config](http://eslint.org/docs/developer-guide/shareable-configs). 

How to use:

- `yarn add --dev textpress-eslint-config`
- Create the following `.eslintrc` file:

```
{
    "extends": "textpress-eslint-config"
}
```

When making changes, you can use 
[`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/) to test your rules locally before committing.
