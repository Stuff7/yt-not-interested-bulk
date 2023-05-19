module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": ["eslint:recommended", "plugin:jsdoc/recommended"],
  "ignorePatterns": ["**/build/*", "**/node_modules/*"],
  "overrides": [
  ],
  "plugins": ["jsdoc"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "rules": {
    "jsdoc/check-indentation": "warn",
    "jsdoc/no-undefined-types": "off",
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "linebreak-style": [
      "error",
      "unix",
    ],
    "quotes": [2, "double", "avoid-escape"],
    "semi": ["warn", "always", { "omitLastInOneLineBlock": true }],
    "a11y-media-has-caption": "off",
    "max-len": [
      "warn", {
        code: 120,
        tabWidth: 4,
      },
    ],
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-fallthrough": ["error", { commentPattern: "break[\\s\\w]*omitted" }],
    "no-param-reassign": [
      "error",
      {
        ignorePropertyModificationsFor: ["draft"],
      },
    ],
    "no-sequences": "warn",
    "no-undef": "off",
    "no-var": "error",
    "prefer-const": ["warn", { destructuring: "all" }],
    "prefer-template": "warn",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "block-spacing": "warn",
    "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
    "comma-dangle": [1, "always-multiline"],
    "comma-spacing": ["warn", { "after": true }],
    "curly": ["error", "all"],
    "function-paren-newline": ["error", "consistent"],
    "generator-star-spacing": ["error", {
      after: true,
      before: false,
    }],
    "key-spacing": ["warn", { "afterColon": true }],
    "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 2, maxEOF: 0 }],
    "no-trailing-spaces": "warn",
    "object-curly-newline": ["error", {
      consistent: true,
      multiline: true,
    }],
    "object-curly-spacing": ["warn", "always", { "objectsInObjects": true }],
    "object-shorthand": "warn",
    "space-before-blocks": "warn",
    "space-infix-ops": ["warn", { "int32Hint": false }],
    "semi-spacing": ["warn", { "before": false, "after": true }],
  },
};
