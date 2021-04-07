module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react-hooks'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    quotes: [2, 'single'],
    semi: [2, 'never'],
    'comma-dangle': [2, 'never'],
    'no-trailing-spaces': [2],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-boolean-value': [0],
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': 2,
    'space-before-function-paren': 0,
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
