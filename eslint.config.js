import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import eslintPrettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'

/** @type {import("eslint").Linter.FlatConfig<import("@typescript-eslint/parser").ParserOptions>} */
const tsLanguageOptions = {
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json'
    }
  }
}

export default [
  tsLanguageOptions,
  prettierConfig,
  {
    plugins: {
      prettier: eslintPrettier
    },
    rules: {
      'prettier/prettier': 'error',
      'max-lines': ['error', { max: 680, skipBlankLines: true, skipComments: true }],
      'jsx-quotes': ['error', 'prefer-double'] // 强制在 JSX 属性中一致使用双引号或单引号
    }
  },
  {
    // TypeScript-specific rules
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': typescriptPlugin
    },
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    rules: {
      // 最大文件限制行数
      ...typescriptPlugin.configs['recommended-type-checked'].rules,
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // Prefer type!
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: {
            memberTypes: typescriptPlugin.rules['member-ordering'].defaultOptions[0].default,
            optionalityOrder: 'required-first',
            order: 'alphabetically-case-insensitive'
          }
        }
      ],
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/no-floating-promises': 'off', // 禁止不返回值的异步函数中有等待的 Promise
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn' // Require comment
    }
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    // react config
    settings: {
      react: {
        pragma: undefined,
        version: 'detect'
      }
    },
    plugins: {
      react,
      'react-refresh': reactRefresh,
      'react-hooks': reactHooks
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      ...react.configs.all.rules,
      ...reactHooks.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react-refresh/only-export-components': 'warn',
      'react/jsx-wrap-multilines': 'off', // 在多行 JSX 元素周围加上括号
      'react/jsx-filename-extension': 'off', // 禁止可能包含 JSX 文件扩展名
      'react/jsx-first-prop-new-line': 'off', // 强制 JSX 中第一个属性的正确位置
      'react/jsx-no-bind': 'off', // .bind()JSX 属性中禁止使用箭头函数
      'react/forbid-component-props': 'off', // 禁止组件上使用某些 props
      'react/jsx-max-props-per-line': ['error', { maximum: 4 }], // 在 JSX 中的单行上强制执行最多 props 数量
      'react/jsx-no-literals': 'off', // 禁止在 JSX 中使用字符串文字
      'react/jsx-one-expression-per-line': 'off', // 每行一个 JSX 元素
      'react/function-component-definition': 'off',
      'react/display-name': 'off', // 防止在 React 组件定义中丢失 displayName
      'react/prop-types': 'off', // 防止在 React 组件定义中丢失 props 验证
      'react/no-multi-comp': 'off', // 防止每个文件有多个组件定义
      'react/jsx-indent-props': 'off', // 验证 props 缩进
      'react/no-danger': 'off', // 禁止使用 dangerouslySetInnerHTML
      'react/jsx-max-depth': 'off', // 强制 JSX 最大深度
      'react/prefer-read-only-props': 'off',
      'react/no-array-index-key': 'off', // 禁止index作为列表序列
      'react/jsx-indent': 'off',
      // eslint-disable-next-line no-dupe-keys
      'react/jsx-max-props-per-line': 'off',
      'react/jsx-no-leaked-render': 'off',
      'react/no-unstable-nested-components': 'off',
      'react/jsx-curly-newline': 'off', // 强制所有 JSX 属性都有一致的换行符
      'react/jsx-newline': 'off', // 在 jsx 元素和表达式之后换行
      'react/require-default-props': 'off', // 为每个非必需 prop 强制执行 defaultProps 定义
      'react/jsx-props-no-spreading': 'off', // 强制任何 JSX 属性都不会传播
      'react/no-unsafe': 'off', // 禁止使用不安全的生命周期方法
      'react/react-in-jsx-scope': 'off', // 使用 JSX 时需要引入 React
      'react/hook-use-state': 'off' // useState 钩子值和 setter 变量的解构和对称命名
    }
  },
  {
    // Dedicated import configuration
    files: ['**/*.{cjs,ts,tsx}'],
    languageOptions: {
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }
    },
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            [
              // Packages `react` related packages come first.
              '^\\u0000(?!virtual)',
              '^react',
              '^@?\\w'
            ],
            [
              // Internal packages.
              '^(@|components)(/.*|$)',
              // Side effect imports.
              // '^\\u0000',
              // Parent imports. Put `..` last.
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              // Other relative imports. Put same-folder imports and `.` last.
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$'
            ],
            ['^virtual:(?!/?$)'],
            // Style imports.
            ['^.+\\.?(sc|sa|c|le)ss$']
          ]
        }
      ]
    },
    settings: {
      // https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-1419518561
      'import/parsers': { espree: ['.cjs', '.js'] },
      'import/resolver': { node: true }
    }
  }
]
