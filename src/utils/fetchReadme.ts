const fetchReadme = async (slug: string) => {
  const response = await fetch(
    `https://raw.githubusercontent.com/coelhoalexandre-projetos-alura/${slug}/main/README.md`,
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

  if (!response.ok) throw new Error('Get Readme Error');

  const data = await response.text();

  return data;
};

export default fetchReadme;
