'use client';

import { useEffect, useState } from 'react';

const useHasNextPage = ({ page, tags }: { page: number; tags: string }) => {
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    const set = (delay: number) => {
      const projectCardListElement =
        document?.body.querySelector('#project-card-list');

      if (!projectCardListElement) {
        setTimeout(set.bind(delay++), delay * 1000);
        return;
      }

      const nextPageAttribute =
        projectCardListElement.getAttribute('data-next-page');

      setHasNextPage(nextPageAttribute === 'true' ? true : false);
    };

    if (typeof window === 'undefined') return;

    set(1);
  }, [page, tags]);

  return hasNextPage;
};

export default useHasNextPage;
