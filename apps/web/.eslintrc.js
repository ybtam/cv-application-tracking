module.exports = {
  extends: ['next/core-web-vitals', 'plugin:perfectionist/recommended-natural'],
  plugins: [
    'perfectionist',
    'prettier'
  ],
  rules: {
    '@next/next/no-html-link-for-pages': ['error', './app/'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react-hooks/exhaustive-deps': 'off',
  },
}
