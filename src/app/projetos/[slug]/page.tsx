import fetchReadme from '@/utils/fetchReadme';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { unified } from 'unified';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import Readme from '@/components/Readme';

interface ProjectProps {
  params: Promise<{ slug: string }>;
}

export default async function Project({ params }: ProjectProps) {
  const { slug } = await params;
  const readme = await fetchReadme(slug);
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(readme);
  return (
    <main>
      <Readme>
        <MDXRemote source={file} />
      </Readme>
    </main>
  );
}
