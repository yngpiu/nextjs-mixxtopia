'use client';

import Header from '@/components/layout/header';
import MobileNavigation from '@/components/layout/mobile-navigation';

const PublicLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <MobileNavigation />
      <main className='pt-[3.25rem] md:pt-[4.5rem]'>{children}</main>
    </div>
  );
};

export default PublicLayout;
