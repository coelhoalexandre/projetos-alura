import GithubRepository from './GithubRepository';

export default interface GithubSearchData {
  total_count: number;
  incomplete_results: boolean;
  items: GithubRepository[];
}
