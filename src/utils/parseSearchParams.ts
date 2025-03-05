import SearchParams from '@/interfaces/SearchParams';

const parseSearchParams = (searchParams: SearchParams) => {
  return new URLSearchParams(Object.entries(searchParams));
};

export default parseSearchParams;
