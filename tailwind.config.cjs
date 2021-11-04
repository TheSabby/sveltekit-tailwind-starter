const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	variants: {
		extend: {
			transitionProperty: ['hover', 'focus'],
		},
	},
	theme: {
		extend: {
			colors: {
				teal: colors.teal,
				cyan: colors.cyan,
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
};
