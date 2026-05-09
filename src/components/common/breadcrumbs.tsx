import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground font-medium">
        <li className="flex items-center">
          <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <Home className="size-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, _index) => (
          <li key={item.label} className="flex items-center space-x-2">
            <ChevronRight className="size-4 opacity-50 shrink-0" />
            {item.href ? (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-bold truncate max-w-[150px] md:max-w-none" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
