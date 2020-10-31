module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    // '@snowpack/plugin-typescript',
    '@snowpack/plugin-babel',
    ['@snowpack/plugin-run-script', { cmd: "eslint 'src/**/*.{js,jsx,ts,tsx}'" }],
  ],
  install: [],
  installOptions: {
    installTypes: true,
  },
  devOptions: {},
  buildOptions: {},
  proxy: {},
  alias: {},
}
