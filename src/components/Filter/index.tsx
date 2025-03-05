'use client';

import { tags } from '@/common/tags';
import TagList from '../TagList';
import Tag from '../Tag';
import useNavigation from '@/hooks/useNavigation';

export default function Filter() {
  const { replaceRoute, searchParams } = useNavigation();
  const stringTags = searchParams.get('tags');
  const paramsTags = stringTags ? stringTags.split(',') : [];
  const filterTags = (slug: string) => {
    const currentTags = paramsTags.includes(slug)
      ? paramsTags.filter((tag) => tag !== slug)
      : [...paramsTags, slug];

    replaceRoute({ name: 'tags', value: currentTags.join(',') });
  };

  return (
    <TagList className='justify-between' variant='outline'>
      {tags.map((tag) => (
        <li key={tag.slug}>
          <button onClick={filterTags.bind(null, tag.slug)}>
            <Tag variant={paramsTags.includes(tag.slug) ? 'fill' : 'outline'}>
              {tag.name}
            </Tag>
          </button>
        </li>
      ))}
    </TagList>
  );
}
