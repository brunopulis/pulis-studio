import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
  }),
})

const services = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    price: z.number(),
    category: z.string(),
    duration: z.string(),
    features: z.array(z.string()),
    isPopular: z.boolean().default(false),
    order: z.number().default(0),
  }),
})

const talks = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    type: z.enum(['keynote', 'workshop', 'talk', 'conf']),
    date: z.date(),
    location: z.string(),
    links: z
      .object({
        slides: z.string().url().optional(),
        video: z.string().url().optional(),
        recursos: z.string().url().optional(),
      })
      .optional(),
    highlight: z.boolean().default(false),
  }),
})

export const collections = { projects, services, talks }
