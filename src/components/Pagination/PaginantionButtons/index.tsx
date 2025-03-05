'use client';

import useHasNextPage from '@/hooks/useHasNextPage';
import PaginationButton from './Button';
import useNavigation from '@/hooks/useNavigation';
import { useCallback } from 'react';

export default function PaginationButtons() {
  const { searchParams, replaceRoute } = useNavigation();

  const page = parseInt(searchParams.get('page') || '1');
  const tags = (searchParams.get('tags') || '').toString();
  const hasNextPage = useHasNextPage({ page, tags });

  const handlePagination = useCallback(
    (direction: 1 | -1) =>
      replaceRoute({ name: 'page', value: (page + direction).toString() }),
    [page, replaceRoute]
  );

  const onPrev = () => handlePagination(-1);
  const onNext = () => handlePagination(+1);

  return (
    <ul className='flex flex-row justify-evenly  w-full '>
      <li>
        <PaginationButton onClick={onPrev} disabled={!(page - 1)}>
          Voltar
        </PaginationButton>
      </li>
      <li>
        <PaginationButton onClick={onNext} disabled={!hasNextPage}>
          Proximo
        </PaginationButton>
      </li>
    </ul>
  );
}
