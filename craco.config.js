const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@font-size-base': '12px' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
