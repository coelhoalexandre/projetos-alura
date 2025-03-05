import { ReactNode } from 'react';
import SectionTitle from '../SectionTitle';

interface AboutProps {
  children: ReactNode;
}

export default function About({ children }: AboutProps) {
  return (
    <section className='flex flex-col items-center mb-3'>
      <SectionTitle>Sobre</SectionTitle>
      <div className='w-10/12 max-w-[400px]'>{children}</div>
    </section>
  );
}
