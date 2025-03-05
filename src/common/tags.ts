interface Tag {
  slug: string;
  name: string;
  priority: number;
}

interface ObjectTag {
  [key: string]: Tag | undefined;
}

export const objectTags: ObjectTag = {
  frontend: { slug: 'frontend', name: 'Frontend', priority: 10 },
  backend: { slug: 'backend', name: 'Backend', priority: 10 },
  next: { slug: 'next', name: 'Next.js', priority: 9 },
  react: { slug: 'react', name: 'React', priority: 9 },
  expressjs: { slug: 'expressjs', name: 'Express.js', priority: 9 },
  nestjs: { slug: 'nestjs', name: 'NestJS', priority: 9 },
  html: { slug: 'html', name: 'HTML', priority: 9 },
  css: { slug: 'css', name: 'CSS', priority: 8 },
  javascript: { slug: 'javascript', name: 'JavaScript', priority: 7 },
  nodejs: { slug: 'nodejs', name: 'Node.js', priority: 7 },
  typescript: { slug: 'typescript', name: 'TypeScript', priority: 6 },
} as const;

export const tags = Object.values(objectTags).map((tag) => tag as Tag);
