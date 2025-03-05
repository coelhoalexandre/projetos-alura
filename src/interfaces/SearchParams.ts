export default interface SearchParams {
  per_page?: string;
  page?: string;
  name?: string;
  tags?: string;
}

export type SearchParamsPromise = Promise<SearchParams>;
