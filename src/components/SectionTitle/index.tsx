import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className='mb-8 py-4 w-screen bg-primary-light text-background text-4xl text-center font-bold uppercase'>
      {children}
    </h2>
  );
}
