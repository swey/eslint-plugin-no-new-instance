# eslint-plugin-no-instantiating

ESLint rule for disallowing the instantiating of given classes

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-instantiating`:

```
$ npm install eslint-plugin-no-instantiating --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-instantiating` globally.

## Usage

Add `test-plugin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-instantiating"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-instantiating/no-instantiating": ["Event", "AnotherClass"]
    }
}
```

When using this rule the following code is a considered problem:
```js
window.dispatchEvent(new Event('resize'));
```


The following code is considered okay:
```js
window.dispatchEvent(new CustomEvent('resize'));
```



