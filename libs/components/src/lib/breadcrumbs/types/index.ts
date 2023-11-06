import { ReactNode } from 'react';

//todo: removed [LinkProps] from utils/generics and added here. we need to update this because we are using this on multiple places
interface LinkProps {
  content: ReactNode;
  href: string;
}

export type BreadcrumbsProps = {
  size?: 'md' | 'sm';
  links?: LinkProps[];
  className?: string;
};
