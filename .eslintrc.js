module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['react', 'import'],
  rules: {
    // Override our default settings just for this directory
    'arrow-body-style': ['warn', 'as-needed'],
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'linebreak-style': 'off',
    'max-len': ['error', 120],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': [1, { skipUndeclared: true }],
    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/first': 'off',
    'no-confusing-arrow': 'warn',
    'array-callback-return': 'off',
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
  },
};
