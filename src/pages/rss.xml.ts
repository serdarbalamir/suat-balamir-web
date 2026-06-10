import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import site from '../data/site.json';

export async function GET(context: APIContext) {
  const articles = (await getCollection('makaleler', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const insights = (await getCollection('icgoruler', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: site.siteTitle,
    description: site.description,
    site: context.site!,
    items: [
      ...articles.map((a) => ({
        title: a.data.title,
        description: a.data.description,
        pubDate: a.data.pubDate,
        link: `/makaleler/${a.id}`,
        categories: [a.data.kategori, ...a.data.tags],
      })),
      ...insights.map((i) => ({
        title: i.data.title,
        description: i.body ?? '',
        pubDate: i.data.pubDate,
        link: `/linkedin-icgoruleri`,
        categories: [i.data.konu, ...i.data.tags],
      })),
    ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
    customData: '<language>tr</language>',
  });
}
