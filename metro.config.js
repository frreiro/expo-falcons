module.exports = {
  extends: ' @expo/metro-config',
  resolver: {
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
    assetExts: ['glb', 'gltf', 'mtl', 'obj', 'png', 'jpg', 'hdr', 'ttf', 'jpg'],
  },
};
