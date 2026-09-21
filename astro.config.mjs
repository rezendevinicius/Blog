// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://balaustres.netlify.app',
	integrations: [mdx(), sitemap()],

	markdown: {
		remarkPlugins: [remarkBreaks],
	},

	vite: {
		plugins: [tailwindcss()],
	},
});