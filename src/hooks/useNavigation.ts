'use client';

import Query from '@/interfaces/Query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (...queries: Query[]) => {
      const params = new URLSearchParams(searchParams.toString());

      console.log(queries);
      queries.forEach((query) => {
        if (query.value.length) params.set(query.name, query.value);
        else {
          if (params.get(query.name)) params.delete(query.name);
          else throw new Error(`Query ${query.name} is empty`);
        }
      });

      return params.toString();
    },
    [searchParams]
  );

  const replaceRoute = (...queries: Query[]) => {
    const queryString = createQueryString(...queries);
    const queryParams = queryString.length ? `?${queryString}` : '';

    router.replace(pathname + queryParams, {
      scroll: false,
    });
  };

  return { router, pathname, searchParams, createQueryString, replaceRoute };
};

export default useNavigation;
