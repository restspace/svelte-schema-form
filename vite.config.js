import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			util: 'rollup-plugin-node-polyfills/polyfills/util',
			url: 'rollup-plugin-node-polyfills/polyfills/url',
			'svelte-schema-form': path.resolve('src/lib')
		}
	},
	build: {
		rollupOptions: {
			plugins: [
				rollupNodePolyFill()
			]
		}
	}
};

export default config;
