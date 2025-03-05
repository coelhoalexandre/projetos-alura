import { ReactNode } from 'react';

interface ListItemLinkProps {
  href: string;
  children: ReactNode;
}

export default function ListItemLink({ href, children }: ListItemLinkProps) {
  return (
    <li>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='text-primary-dark hover:text-primary-light hover:underline hover:scale-105'
      >
        {children}
      </a>
    </li>
  );
}
