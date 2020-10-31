module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-babel', // Typescript is parsed via babel
  ],
  install: [],
  installOptions: {
    installTypes: true,
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {},
  proxy: {},
  alias: {},
}
