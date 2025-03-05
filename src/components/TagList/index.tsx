import { HTMLAttributes, ReactNode } from 'react';

interface TagListProps {
  className?: HTMLAttributes<HTMLUListElement>['className'];
  variant?: 'outline' | 'fill';
  children: ReactNode;
}

export default function TagList({ className, children }: TagListProps) {
  return <ul className={`flex flex-wrap gap-2 ${className}`}>{children}</ul>;
}
