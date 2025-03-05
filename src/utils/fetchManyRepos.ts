import GithubSearchData from '@/interfaces/GithubSearchData';
import RepoData from '@/interfaces/RepoData';
import SearchParams from '@/interfaces/SearchParams';

export const defaultSearchParams: Required<SearchParams> = {
  name: '',
  page: '1',
  per_page: '12',
  tags: '',
} as const;

const fetchManyRepos = async ({
  name,
  tags: topics,
  per_page: perPage = defaultSearchParams.per_page,
  page = defaultSearchParams.page,
}: SearchParams) => {
  const defaultQuery = 'org:coelhoalexandre-projetos-alura fork:true is:public';
  const nameQuery = name ? `${name} in:name ` : '';
  const topicsQuery = topics ? `${topics.replaceAll(',', ' ')} in:topics ` : '';
  const query = encodeURIComponent(`${nameQuery}${topicsQuery}${defaultQuery}`);
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${query}&per_page=${perPage}&page=${page}`,
    {
      cache: 'force-cache',
      next: {
        revalidate: 86400,
      },
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_AUTHORIZATION_TOKEN}`,
      },
    }
  );

  if (!response.ok) throw new Error('Get Repos Error');

  const link = response.headers.get('link') || '';
  const data: GithubSearchData = await response.json();
  const repoData: RepoData = {
    reposTotal: data.total_count,
    incompleteResults: data.incomplete_results,
    currentPage: parseInt(page),
    hasPrevPage: !!(parseInt(page) - 1),
    hasNextPage: link.includes('next'),
    repos: data.items,
  };

  return repoData;
};

export default fetchManyRepos;
