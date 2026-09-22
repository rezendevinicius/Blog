// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import pagefind from 'astro-pagefind';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://balaustres.netlify.app',
	integrations: [mdx(), sitemap(), pagefind()],

	markdown: {
		remarkPlugins: [remarkBreaks, remarkMath],
		rehypePlugins: [rehypeKatex],
	},

	vite: {
		plugins: [tailwindcss()],
	},
});