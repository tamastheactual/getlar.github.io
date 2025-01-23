import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      lastModDate: z.string().transform((str) => new Date(str)),
      imgUrlLg: image(),
      imgUrlSm: image(),
    }),
});

const projectCollection = defineCollection({
  schema: ({}) =>
    z.object({
      title: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      lastModDate: z.string().transform((str) => new Date(str)),
    }),
});

const teachingCollection = defineCollection({
  schema: ({}) =>
    z.object({
      title: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      lastModDate: z.string().transform((str) => new Date(str)),
      name: z.string(),
      semester: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
  project: projectCollection,
  teaching: teachingCollection,
};
