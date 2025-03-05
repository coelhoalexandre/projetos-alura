import GithubRepository from './GithubRepository';

export default interface RepoData {
  reposTotal: number;
  incompleteResults: boolean;
  currentPage: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  repos: GithubRepository[];
}
