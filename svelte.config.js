import adapter from '@sveltejs/adapter-auto';
import url from 'postcss-url';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
	}),

	kit: {
		adapter: adapter(),
		package: {
		}
	}
};

export default config;
