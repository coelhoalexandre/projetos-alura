import ProjectSection from '@/components/ProjectSection';
import SearchParams from '@/interfaces/SearchParams';

interface HomeProps {
  searchParams: Promise<SearchParams>;
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <main>
      {/* <About>
        <p>
          Esse projeto foi feito por mim, <Strong>Alexandre Coelho</Strong>, com
          objetivo de organizar referencias de todos (ou quase) os{' '}
          <Strong>Projetos Alura</Strong> que realizei ao longo do tempo.
        </p>
      </About> */}
      <ProjectSection searchParams={searchParams} />
    </main>
  );
}
