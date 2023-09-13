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
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: false,
    },
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:nuxt/recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue-pug/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    // 0 = 'off'; 1 = 'warn'; 2 = 'error
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "vue/no-v-for-template-key": 0,
    "vue/multi-word-component-names": 0,
    "vue/no-v-for-template-key-on-child": 2,
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-undef": 0,
  },
  globals: {
    $nuxt: true,
  },
};
