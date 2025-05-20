import { Fragment } from 'react';
import Link from 'next/link';

import { NMIXX_SOCIALS } from '@/constants/socials';

const SocialLinks = () => {
  return (
    <div className='my-5 flex items-center gap-2 md:my-6'>
      {NMIXX_SOCIALS.map((social, index) => (
        <Fragment key={social.id}>
          <Link href={social.link} target='_blank' className='transition-transform hover:scale-110'>
            <social.icon className='text-foreground size-5' />
          </Link>
          {index < NMIXX_SOCIALS.length - 1 && (
            <span className='text-foreground/50 cursor-default'>•</span>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default SocialLinks;
