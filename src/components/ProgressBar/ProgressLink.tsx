'use client';

import cn from 'clsx';
import { useRouter } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import type { ReactElement, ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode | string;
  isSelected: boolean;
};

export default function ProgressLink({ href, children, isSelected, ...props }: Props): ReactElement {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();

    if (isSelected) return;

    NProgress.start();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        'transition-opacity duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
        `${isSelected ? 'hover:opacity-100' : 'hover:opacity-90'}`,
        `${isSelected ? 'cursor-auto' : 'cursor-pointer'}`,
        `${isSelected ? 'text-foreground' : 'text-primary'}`,
        `${isSelected && typeof children !== 'object' ? 'border-b border-b-[2px] border-b-white' : ''}`,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
