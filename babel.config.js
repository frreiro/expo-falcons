module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            '@assets': './assets/',
            '@app': './src/app',
            '@components': './src/app/components',
            '@layouts': './src/app/layouts',
            '@pages': './src/app/pages',
            '@globalStyle': './src/styles',
            '@redux': './src/redux',
            '@providers': './src/app/providers',
            '@resource': './resource',
          },
        },
      ],
    ],
  };
};
