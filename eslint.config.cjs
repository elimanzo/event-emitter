module.exports = [
  {
    files: ["*.ts", "*.tsx"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      // Add your custom rules here
    },
  },
];
