module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:jsx-a11y/recommended",
        "eslint-config-prettier",
    ],
    ignorePatterns: [
      "vite.config.ts"
    ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
      "semi": [
        "error",
        "never"
      ],
      "@typescript-eslint/member-delimiter-style": [
        "error",
        {
          "multiline": {
            "delimiter": "none",
            "requireLast": true
          },
          "singleline": {
            "delimiter": "semi",
            "requireLast": false
          }
        }
      ],
      "@typescript-eslint/semi": [
        "error",
        "never"
      ],
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal"
          ],
          "pathGroups": [
            {
              "pattern": "react",
              "group": "external",
              "position": "before"
            }
          ],
          "pathGroupsExcludedImportTypes": [
            "react"
          ],
          "newlines-between": "always",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ],
      "react/react-in-jsx-scope": "off",
      "react/jsx-one-expression-per-line": "off",
      "no-plusplus": [
        "error",
        {
          "allowForLoopAfterthoughts": true
        }
      ],
      "import/no-extraneous-dependencies": [
        "error",
        {
          "devDependencies": [
            "test.{ts,tsx}", // repos with a single test file
            "test-*.{ts,tsx}", // repos with multiple top-level test files
            "**/*{.,_}{test,spec}.{ts,tsx}", // tests where the extension or filename suffix denotes that it is a test
            "src/setupTests.ts" // setup
          ],
          "optionalDependencies": false
        }
      ],
      "react/function-component-definition": "off",
      "arrow-body-style": "off",
      "import/prefer-default-export": "off",
      "import/no-named-default": "off",
      "@typescript-eslint/comma-dangle": "off",
      "no-param-reassign": "off",
      "no-alert": "off",
      "react/require-default-props": "off",
      "react/jsx-props-no-spreading": "off"
    }

};
