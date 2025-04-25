import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import parser from "@babel/eslint-parser";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-duplicate-imports": "error",
      "eqeqeq": ["error", "always"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "prefer-const": "error",
      "no-var": "error",

    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
