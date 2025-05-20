import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/class-name';

import { LEFT_NAVIGATION, RIGHT_NAVIGATION } from '@/constants/navigation';

import Logo from '@/components/shared/logo';

import UserAvatar from './user-avatar';

const Header = () => {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <header className='bg-background fixed top-0 right-0 left-0 z-50 flex h-[3.25rem] items-center md:h-[4.5rem]'>
      <div className='mx-auto flex max-w-5xl flex-1 items-center justify-between px-4 lg:px-6'>
        <div className='flex items-center md:gap-3 lg:gap-5'>
          <Logo className='h-10 md:h-11' />
          <div className='hidden md:flex md:gap-1.5 md:text-sm lg:gap-2 lg:text-[0.9375rem]'>
            {LEFT_NAVIGATION.map(item => (
              <Link
                key={item.id}
                href={item.path}
                className={cn(
                  'text-foreground/60 block p-2 font-semibold',
                  item.path === pathname && 'text-foreground'
                )}
              >
                {item.name[locale]}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-1 sm:gap-1.5 lg:gap-2'>
          <div className='flex items-center gap-1 sm:gap-1.5 lg:gap-2'>
            {RIGHT_NAVIGATION.map(item => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className='block p-2 transition-transform hover:scale-110'
                >
                  <Icon className='size-6' />
                </Link>
              );
            })}
          </div>
          <UserAvatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
