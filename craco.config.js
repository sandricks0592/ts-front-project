const cracoAlias = require("craco-alias");

module.exports = {
  // proxy 사용 시 CRA가 LAN IP를 allowedHosts에 넣는데, 환경에 따라 비어 webpack-dev-server 스키마 오류가 난다.
  devServer: (devServerConfig) => {
    devServerConfig.allowedHosts = "all";
    return devServerConfig;
  },
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "tsconfig.paths.json",
        debug: false,
      },
    },
  ],
};
