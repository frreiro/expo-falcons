module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            '@components': './src/app/components',
            '@layouts': './src/app/layouts',
            '@pages': './src/app/pages',
            '@globalStyle': './src/styles',
            '@assets': './src/assets',
            '@redux': './src/redux',
            '@providers': './src/app/providers',
            '@resource': './resource',
          },
        },
      ],
    ],
  };
};
