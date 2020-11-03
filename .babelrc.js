module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: { esmodules: true },
      },
    ],
    'solid',
    '@babel/preset-typescript',
  ],
  plugins: [
    // '@babel/plugin-syntax-dynamic-import',
    // '@babel/proposal-class-properties',
    // '@babel/proposal-object-rest-spread',
  ],
  // cacheCompression: isProduction,
  // compact: isProduction,
}
