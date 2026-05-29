import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type SmartLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>;

export function SmartLink({ href, children, ...props }: SmartLinkProps) {
  const isExternal = /^https?:\/\//i.test(href);

  if (isExternal) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}
