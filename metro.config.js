const { getDefaultConfig } = require('expo/metro-config');

// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push('js', 'jsx', 'json', 'ts', 'tsx', 'cjs');
config.resolver.assetExts.push(
  'glb',
  'gltf',
  'mtl',
  'obj',
  'png',
  'jpg',
  'hdr',
  'ttf',
  'jpg',
);

module.exports = config;
