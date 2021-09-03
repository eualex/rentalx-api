module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@modules/*': './src/modules/*',
        '@routes/*': './src/routes/*',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}