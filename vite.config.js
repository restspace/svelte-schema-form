import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(

	)],
	resolve: {
		alias: {
			'svelte-schema-form': path.resolve('src/lib')
		}
	}
};

export default config;
