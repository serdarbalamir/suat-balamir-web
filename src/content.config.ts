import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/**
 * Makale kategorileri — Decap CMS config.yml ile senkron tutulmalıdır.
 */
export const MAKALE_KATEGORILERI = [
  'Yağmur Suyu Yönetimi',
  'Kanalizasyon Sistemleri',
  'DWA Standartları',
  'CSO Yönetimi',
  'Kentsel Drenaj',
  'Çevre Teknolojileri',
  'Altyapı Sistemleri',
  'Ürün İncelemeleri',
  'Teknik Görüşler',
] as const;

export const KUTUPHANE_KATEGORILERI = [
  'Standart Özetleri',
  'Hesaplama Yöntemleri',
  'Tasarım Kriterleri',
  'Kirlilik Sınıflandırmaları',
  'Uluslararası Karşılaştırmalar',
  'Hidrolik Referanslar',
  'Kentsel Taşkın Kaynakları',
] as const;

export const URUN_KATEGORILERI = [
  'Yağmur Suyu Yönetimi',
  'Atıksu Sistemleri',
  'Drenaj Çözümleri',
  'Arıtma Teknolojileri',
  'Depolama Sistemleri',
] as const;

/** Makaleler — dergi yazıları ve uzun teknik içerik */
const makaleler = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/makaleler' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // "İlk Yayın" alanları — içerik başka bir kaynakta yayınlandıysa
    ilkYayinTarihi: z.coerce.date().optional(),
    ilkYayinKaynagi: z.string().optional(), // ör. "Su ve Çevre Teknolojileri Dergisi, Sayı 212"
    ilkYayinUrl: z.string().url().optional(),
    kategori: z.enum(MAKALE_KATEGORILERI),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    pdf: z.string().optional(), // indirilebilir PDF yolu
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/** LinkedIn İçgörüleri — kısa formlu gözlem ve yorumlar */
const icgoruler = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/icgoruler' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    konu: z.string(), // ör. "Kentsel Taşkın", "Mevzuat", "Altyapı Yatırımları"
    linkedinUrl: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/** Teknik Kütüphane — yapılandırılmış mühendislik bilgisi */
const kutuphane = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kutuphane' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    kategori: z.enum(KUTUPHANE_KATEGORILERI),
    standartlar: z.array(z.string()).default([]), // ör. ["DWA-M 153", "EN 752"]
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    pdf: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/** Ürünler ve Çözümler */
const urunler = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/urunler' }),
  schema: z.object({
    title: z.string(), // Ürün adı
    description: z.string(),
    kategori: z.enum(URUN_KATEGORILERI),
    image: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    specs: z
      .array(z.object({ name: z.string(), value: z.string() }))
      .default([]), // Teknik özellikler tablosu
    applications: z.array(z.string()).default([]), // Kullanım alanları
    benefits: z.array(z.string()).default([]), // Faydalar
    standartlar: z.array(z.string()).default([]), // İlgili standartlar
    brochure: z.string().optional(), // Broşür PDF
    downloads: z
      .array(z.object({ label: z.string(), file: z.string() }))
      .default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

/** Grafikler — JSON üzerinden düzenlenebilir Chart.js verileri */
const grafikler = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/charts' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['line', 'bar', 'pie', 'doughnut', 'radar']),
    description: z.string().optional(),
    source: z.string().optional(), // veri kaynağı / standart referansı
    labels: z.array(z.string()),
    datasets: z.array(
      z.object({
        label: z.string(),
        data: z.array(z.number()),
      })
    ),
    yAxisLabel: z.string().optional(),
    xAxisLabel: z.string().optional(),
  }),
});

export const collections = { makaleler, icgoruler, kutuphane, urunler, grafikler };
