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
        '@controllers/*': './src/controllers/*',
        '@models/*': './src/models/*',
        '@views/*': './src/views/*',
        '@config/*': './src/config/*',
        '@utils/*': './src/utils/*',
        '@routes/*': './src/routes/*',
        '@repositories/*': './src/repositories/*',
        '@services/*': './src/services/*',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}