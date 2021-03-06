/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 */
const path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
      }
    ),
    blockList: [/web.*/],
  },
  projectRoot: path.resolve(__dirname),
  watchFolders: [path.resolve(__dirname, '../shared')],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
