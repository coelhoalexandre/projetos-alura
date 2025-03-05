import ProjectCard from '../ProjectCard';
import { SearchParamsPromise } from '@/interfaces/SearchParams';
import fetchManyRepos from '@/utils/fetchManyRepos';
import parseProjects from '@/utils/parseProjects';

interface ProjectListProps {
  searchParams: SearchParamsPromise;
}

export default async function ProjectCardList({
  searchParams,
}: ProjectListProps) {
  const reposData = await fetchManyRepos(await searchParams);
  const projects = await parseProjects(reposData.repos);

  return (
    <ul
      id='project-card-list'
      data-next-page={reposData.hasNextPage}
      className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] auto-rows-fr gap-2'
    >
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
