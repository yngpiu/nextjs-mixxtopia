import Link from 'next/link';

import { Button } from '@/components/ui/button';

const CallToAction = ({ t }) => {
  return (
    <div className='flex items-center gap-4'>
      <Button size='lg' asChild>
        <Link href='/login'>{t('login')}</Link>
      </Button>
      <Button size='lg' variant='outline' className='border-foreground'>
        {t('share')}
      </Button>
    </div>
  );
};

export default CallToAction;
