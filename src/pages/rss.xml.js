import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const aulas = await getCollection('aulas');
	const textos = await getCollection('literatura');

	const items = [
		...aulas.map((aula) => ({
			title: aula.data.title,
			description: aula.data.description,
			pubDate: aula.data.pubDate,
			link: '/aulas/' + aula.id + '/',
		})),
		...textos.map((texto) => ({
			title: texto.data.title,
			description: texto.data.description ?? '',
			pubDate: texto.data.pubDate,
			link: '/literatura/' + texto.id + '/',
		})),
	].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});
}
