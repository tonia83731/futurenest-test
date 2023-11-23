module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "standard",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": [
      "enabled", // Replace with 'error' to treat warnings as errors, or 'off' to disable
      {
        ignore: [], // List of props to ignore
        customValidators: [], // List of custom validators
        skipUndeclared: false, // Whether to skip prop types for undeclared components
      },
    ],
  },
  settings: {
    react: {
      version: "detect", // Automatically includes the React version
    },
  },
};
