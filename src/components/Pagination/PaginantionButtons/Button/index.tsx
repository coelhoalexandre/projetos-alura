'use client';

import { ButtonHTMLAttributes } from 'react';

export default function PaginationButton({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className='border-pattern-primary-light bg-primary-light px-5 py-2 text-background font-bold hover:bg-background hover:text-primary-light enabled:hover:scale-105 disabled:disabled transition'
      {...rest}
    >
      {children}
    </button>
  );
}
