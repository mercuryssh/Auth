module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
  ignore: [
    '**/*.test.ts',
    '**/*.spec.ts',
  ],
};