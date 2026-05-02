'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  width?: number;
  containerStyles?: string;
  linkStyles?: string;
  unlinked?: boolean;
};

const Logo = ({
  className,
  width = 120,
  containerStyles,
  linkStyles,
  unlinked,
}: Props) => {
  const heightMultiplier = 9 / 16;

  const img = (
    <Image
      src="/logo.png"
      alt="Hive Sync"
      height={width * heightMultiplier}
      width={width}
      priority
      className={cn(
        'h-9 w-auto object-contain drop-shadow-[0_2px_6px_rgba(15,23,42,0.35)]',
        className,
      )}
    />
  );

  return (
    <div className={cn('flex h-fit w-fit items-center', containerStyles)}>
      {unlinked ? (
        img
      ) : (
        <Link href="/" className={cn(linkStyles)}>
          {img}
        </Link>
      )}
    </div>
  );
};

export default Logo;
