const js = require("@eslint/js");
const globals = require("globals");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn", // Variáveis não usadas emite warning
      "prefer-const": "error", // Use const se a variável não muda
      "no-console": "warn", // Alerta se usar console.log
      "consistent-return": "warn", // Garante funções que retornem algo sempre
      "prefer-template": "warn", // Prefere template strings em vez de +
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
