module.exports = {
	type: "react-app",
	webpack: {
		extra: {
			module: {
				rules: [
					{
						test: /\.(pdf)$/,
						use: [
							{
								loader: "file-loader",
								options: {
									name: "[name].[ext]",
								},
							},
						],
					},
				],
			},
		},
	},
};
