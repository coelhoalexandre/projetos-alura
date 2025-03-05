import Project from '@/interfaces/Project';
import { objectTags } from '@/common/tags';
import TagList from '../TagList';
import Tag from '../Tag';
import ListItemLink from './ListItemLink';

interface ProjectProps {
  project: Project;
}

const parseTag = (tag: string) => {
  const parsedTag = objectTags[tag];
  return parsedTag;
};

const handleTags = (tags: string[]) => {
  const parsedTag = tags.map((tag) => parseTag(tag));
  const filteredTags = parsedTag.filter((tag) => typeof tag !== 'undefined');
  const sortedTags = filteredTags.sort((a, b) => b.priority - a.priority);
  const mappedTags = sortedTags.map((tag) => tag.name);
  return mappedTags;
};

export default function ProjectCard({ project }: ProjectProps) {
  const tags = handleTags(project.tags);
  return (
    <div className='flex flex-col justify-between gap-4 border-pattern-primary-dark p-3 h-full'>
      <div className='flex flex-col gap-2'>
        <h3 className='font-bold text-primary-dark text-xl text-center'>
          {project.name}
        </h3>
        {project.description && <p>{project.description}</p>}
        <TagList className='justify-evenly'>
          {tags.map((tag) => (
            <li key={tag}>
              <Tag variant={'fill'}>{tag}</Tag>
            </li>
          ))}
        </TagList>
      </div>
      <ul className='flex justify-around'>
        <ListItemLink
          href={`https://github.com/coelhoalexandre-projetos-alura/${project.slug}`}
        >
          Repósitorio
        </ListItemLink>
        <ListItemLink
          href={`https://github.com/coelhoalexandre-projetos-alura/${project.slug}/blob/main/README.md`}
        >
          Readme
        </ListItemLink>
        {project.homepage && (
          <ListItemLink href={project.homepage}>Projeto</ListItemLink>
        )}
      </ul>
    </div>
  );
}
