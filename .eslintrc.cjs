module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures : {
      jsx : false
    }
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "plugin:vue/recommended",
    "eslint:recommended",
  ],
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  env: {
    node: true,
  },
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  globals: {
    $nuxt: true,
  },
};
