module.exports = {
	publicPath: "./", //基本部署路径publicPath
	outputDir: "dist", //打包输出目录
	assetsDir: "static", //静态资源文件路径
	productionSourceMap: false, //生产环境开启资源地图
	devServer: {
		overlay: {
			warnings: true
		},
		port: 9527,
        disableHostCheck: true
	},
	lintOnSave: true
}