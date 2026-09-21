import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';



const aulas = defineCollection({
	loader: glob({ base: './src/content/aulas', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		disciplina: z.enum(['Matemática', 'Física']),
		videoId: z.string().optional(),
	}),
});

const literatura = defineCollection({
	loader: glob({ base: './src/content/literatura', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		tipo: z.enum(['Poema', 'Crônica', 'Redação']),
	}),
});

export const collections = { aulas, literatura };

