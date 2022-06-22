import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import mdsvexConfig from './mdsvex.config';
import md from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [md.mdsvex(mdsvexConfig)],
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter()
	}
};

export default config;
