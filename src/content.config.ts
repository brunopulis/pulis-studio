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

export const collections = { projects, services }
