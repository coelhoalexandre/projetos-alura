import { Suspense } from 'react';
import ProjectCardList from '../ProjectCardList';
import { SearchParamsPromise } from '@/interfaces/SearchParams';
import Search from '../Search';
import Pagination from '../Pagination';
import SectionTitle from '../SectionTitle';
import Filter from '../Filter';

interface ProjectSectionProps {
  searchParams: SearchParamsPromise;
}

export default function ProjectSection({ searchParams }: ProjectSectionProps) {
  return (
    <section className='flex flex-col items-center min-h-screen'>
      <SectionTitle>Projetos</SectionTitle>

      <div className='flex flex-col justify-center gap-4 px-5 w-screen max-w-[1400px]'>
        <Search />
        <Filter />

        <Suspense fallback={'...carregando'}>
          <ProjectCardList searchParams={searchParams} />
        </Suspense>

        <Pagination />
      </div>
    </section>
  );
}
