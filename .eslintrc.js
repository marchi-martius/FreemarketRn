module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:react-native/all",
    "airbnb"
  ],
  "plugins": [
    "react",
    "react-native",
    "jsx-a11y",
    "import",
    "jest"
  ],
  "env": {
    "jest/globals": true
  },
  "rules": {
    "react/jsx-filename-extension": 0
  }
};
