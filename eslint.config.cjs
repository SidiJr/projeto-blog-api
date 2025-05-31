module.exports = [
  {
    files: ["**/*.{js,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
      },
    },
    rules: {
      "prefer-const": "error",
      "no-console": "warn",
      "consistent-return": "warn",
      "prefer-template": "warn",
    },
  },
];