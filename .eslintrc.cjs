module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "import", "unused-imports", "react-hooks"],
  rules: {
    "react-refresh/only-export-components": "warn",
    quotes: ["error", "double"],
    eqeqeq: "error",
    "react/no-array-index-key": "off",
    "lines-between-class-members": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
    ],
    "no-shadow": ["error"],
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-console": "warn",
    "unused-imports/no-unused-imports": "error",
    "import/prefer-default-export": "off",
    "import/no-duplicates": ["error", { considerQueryString: true }],
    "import/no-unused-modules": ["error", { unusedExports: true }],
    "import/export": "off",
    "import/no-cycle": ["error", { maxDepth: Number.MAX_SAFE_INTEGER }],
    "import/no-mutable-exports": "error",
    "import/no-relative-parent-imports": "off",
    "import/namespace": "off",
    "no-duplicate-imports": "off",
    "import/order": [
      0,
      {
        "newlines-between": "always",
        groups: [
          "external",
          "internal",
          "index",
          "parent",
          "sibling",
          "builtin",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "styles/**",
            group: "object",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    "no-restricted-imports": [
      "off",
      {
        paths: [],
        patterns: [],
      },
    ],
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    // errors
    "for-direction": "error",
    "no-cond-assign": ["error", "always"],
    "no-constant-condition": "warn",
    "no-debugger": "error",
  },
};
