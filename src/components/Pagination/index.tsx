'use client';

import useNavigation from '@/hooks/useNavigation';
import PaginationButtons from './PaginantionButtons';
import { defaultSearchParams } from '@/utils/fetchManyRepos';

export default function Pagination() {
  const { searchParams } = useNavigation();
  const page = searchParams.get('page') || defaultSearchParams.page;
  return (
    <div className='flex flex-col gap-3'>
      <p>Pagina: {page}</p>
      <PaginationButtons />
    </div>
  );
}
