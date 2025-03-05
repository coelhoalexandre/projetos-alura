'use client';

import useNavigation from '@/hooks/useNavigation';
import { FormEvent, useState } from 'react';

export default function Search() {
  const { replaceRoute } = useNavigation();
  const [name, setName] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    try {
      replaceRoute({ name: 'name', value: name });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form role='search' onSubmit={handleSubmit}>
      <label htmlFor='query'>Busque projetos</label>
      <div className='grid grid-cols-[1fr,auto] w-full max-w-[400px] border-pattern-primary-dark'>
        <input
          type='search'
          id='query'
          name='name'
          placeholder='Digite o nome de um projeto...'
          className='border-r-2 border-foreground p-1 min-w-0 outline-offset-1'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type='submit'
          className='py-2 px-4 hover:enabled:bg-primary-light hover:enabled:text-background disabled:opacity-80'
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
