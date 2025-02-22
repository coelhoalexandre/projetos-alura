import Image from 'next/image';

export default async function Home() {
  const response = await fetch(
    'https://api.github.com/users/coelhoalexandre/repos'
  );
  const data = await response.json();
  console.log(data);
  return <main></main>;
}
