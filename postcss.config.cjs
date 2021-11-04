const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
	plugins: [
		require('tailwindcss'),
		cssnano(),
		postcssPresetEnv({
			stage: 1,
			features: {
				'focus-within-pseudo-class': false,
			},
		}),
		require('autoprefixer'),
	],
};
