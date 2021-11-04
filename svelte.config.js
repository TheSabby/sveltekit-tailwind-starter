import { resolve } from 'path';
import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: node({ out: 'dist' }),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// Vite config. See: https://vitejs.dev/config/
		vite: {
			optimizeDeps: {
				include: [
					'@apollo/client/core',
					'@apollo/client/cache',
					// "@apollo/client/link/ws",
					'@apollo/client/link/context',
					'@apollo/client/link/error',
					'@apollo/client/utilities',
				],
			},
			resolve: {
				alias: {
					$components: resolve('src/components'),
					$utils: resolve('src/utils'), // Util functions & libraries
					$styles: resolve('src/styles'), // Core app styles
					$actions: resolve('src/actions'), // Svelte actions
					$stores: resolve('src/stores'), // Svelte stores
					$operations: resolve('src/operations'), // GraphQL operations
				},
				build: {
					sourceMap: false,
				},
			},
		},
	},
};
