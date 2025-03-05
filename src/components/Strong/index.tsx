import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface StrongProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  variant?: 'light' | 'dark' | 'normal';
}

export default function Strong({ variant = 'dark', children }: StrongProps) {
  const variantClass = variant === 'normal' ? '' : `text-primary-${variant}`;
  return <strong className={`${variantClass}`}>{children}</strong>;
}
