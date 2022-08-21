// const {defineConfig} = require("@vue/cli-service")
// module.exports = defineConfig({
// 	transpileDependencies: true,
// })

module.exports = {
	transpileDependencies: true,
	publicPath: process.env.NODE_ENV === "production" ? "" : "/",
	assetsDir: "assets",
	productionSourceMap: false,
	filenameHashing: true,  // can be false to name with hash available
   devServer: {
      port: 3000
   }
}
