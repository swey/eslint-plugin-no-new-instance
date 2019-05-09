# eslint-plugin-no-new-instance

ESLint rule for disallowing new instances of configured classes

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-new-instance`:

```
$ npm install eslint-plugin-no-new-instance --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-new-instance` globally.

## Usage

Add `no-new-instance` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-new-instance"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-new-instance/no-new-instance": ["error", ["Event", "AnotherClass"]]
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



