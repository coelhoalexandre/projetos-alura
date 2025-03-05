'use client';
import { HTMLAttributes, ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  variant: 'outline' | 'fill';
  isActive?: boolean;
}

const variantClasses: Record<
  'outline' | 'fill',
  HTMLAttributes<HTMLDivElement>['className']
> = {
  outline:
    'bg-transparent text-primary-light hover:bg-primary-light hover:text-background',
  fill: 'bg-primary-light text-background',
};

export default function Tag({ children, variant }: TagProps) {
  const className = `border-pattern-primary-dark rounded-2xl  py-1 px-2  text-xs font-bold ${variantClasses[variant]} `;

  return <div className={className}>{children}</div>;
}
