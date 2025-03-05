import GithubRepository from '@/interfaces/GithubRepository';
import Project from '@/interfaces/Project';

const regExFirstLetterOfWordsForProjects = /^\w|(?<=-)\w/g;

const rename = (oldName: string) => {
  const matches = oldName
    .matchAll(regExFirstLetterOfWordsForProjects)
    .toArray();
  const splitedName = oldName.split('');

  matches.forEach(
    (match) =>
      (splitedName[match.index] = splitedName[match.index].toUpperCase())
  );

  const newName = splitedName.join('').replaceAll('-', ' ');

  return newName;
};

const renameRepo = (repo: GithubRepository): GithubRepository => ({
  ...repo,
  name: rename(repo.name),
  slug: repo.name,
});

const filterProperties = (repo: GithubRepository): Project => ({
  id: repo.id,
  slug: repo.slug || repo.id.toString(),
  name: repo.name,
  description: repo.description,
  tags: repo.topics,
  homepage: repo.homepage,
});

const parseProject = (repo: GithubRepository) => {
  const renamedRepo = renameRepo(repo);

  const parsedProject = filterProperties(renamedRepo);

  return parsedProject;
};

const parseProjects = async (repos: GithubRepository[]) =>
  repos.map(parseProject);

export default parseProjects;
