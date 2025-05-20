import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils/class-name';

const Logo = ({ className }) => {
  return (
    <Link href='/'>
      <div className={cn('relative aspect-[2/1] h-11', className)}>
        <Image
          src='/images/logo.png'
          alt='Mixxtopia'
          fill
          priority
          sizes='(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
    </Link>
  );
};

export default Logo;
