import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/class-name';

import { LEFT_NAVIGATION } from '@/constants/navigation';

const MobileNavigation = () => {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className='bg-background fixed right-0 bottom-0 left-0 z-50 border-t md:hidden'>
      <div className='flex items-center justify-between sm:mx-auto sm:max-w-[80%]'>
        {LEFT_NAVIGATION.map(item => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.path}
              className={cn(
                'text-foreground/60 flex flex-col items-center gap-1 p-2',
                pathname === item.path && 'text-foreground'
              )}
            >
              <Icon className='size-6' />
              <span className='text-center text-xs'>{item.name[locale]}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavigation;
