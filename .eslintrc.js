module.exports = {
    parser: "babel-eslint",
    env: {
      browser: true,
      es6: true
    },
    extends: ["eslint:recommended", "airbnb", "eslint-config-prettier"],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly"
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: "module"
    },
    plugins: ["react", "react-hooks", "jsx-a11y", "import"],
    rules: {
      "linebreak-style": 0,
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "react/state-in-constructor": "off",
      "array-callback-return": "off",
      "react/no-unused-state": "off",
      "prefer-object-spread": "off",
      "no-restricted-syntax": "off",
      "guard-for-in": "off",
      "react/destructuring-assignment": "off",
      "default-case": "off",
      "class-methods-use-this": "off",
      "prefer-template": "off",
      "no-param-reassign": "off",
      "react/prop-types": "off",
      "react/jsx-props-no-spreading": "off",
    }
  };