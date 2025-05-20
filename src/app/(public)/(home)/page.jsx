import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

import CallToAction from '@/components/home/call-to-action';
import HeroCarousel from '@/components/home/hero-carousel';
import SocialLinks from '@/components/home/social-links';
import IKImage from '@/components/shared/IKImage';

import NMIXXLogoIcon from '@/assets/icons/nmixx-logo.svg';
import { getImages } from '@/services/image-service';

const HomePage = async () => {
  const result1 = await getImages('CAROUSEL', 'HOMEPAGE');
  const result2 = await getImages('MEMBERS', 'HOMEPAGE');
  const t = await getTranslations('HomePage');

  return (
    <div>
      <section>
        {result1.error ? (
          <div className='text-center text-red-500'>{result1.error}</div>
        ) : (
          <HeroCarousel carouselImages={JSON.stringify(result1)} />
        )}
      </section>
      <section>
        <IKImage
          src={
            'https://ik.imagekit.io/purm5sqa4/mixxtopia/static/ui/home-carousel/GpL0R8Ia4AAtex_.jpg'
          }
          alt='test'
          width={3000}
          height={2000}
        />
      </section>

      {/* <section className='mt-8 flex flex-col items-center md:mt-10'>
        <Link
          href='https://nmixx.jype.com/'
          target='_blank'
          className='transition-transform duration-500 hover:scale-105'
        >
          <NMIXXLogoIcon className='text-primary h-10 md:h-12' />
        </Link>
        <h1 className='mt-2 text-sm md:mt-3'>MIXXTOPIA - AN UNOFFICIAL NMIXX FANSITE</h1>
        <SocialLinks />
        <CallToAction t={t} />
      </section>
      <section className='mx-auto mt-10 max-w-5xl px-4 md:mt-12 lg:px-6'>
        <h2 className='mb-3 text-lg font-semibold md:mb-4'>{t('member')}</h2>
        <div className='grid grid-cols-3 gap-2 md:gap-5'>
          {result2.map(image => {
            return (
              <div key={image.id}>
                <div className='relative aspect-[2/3] w-full'>
                  <IKImage
                    src={image.url}
                    alt={image.alt}
                    fill
                    priority
                    className='object-cover object-top'
                    sizes='(max-width: 1024px) 35vw, 30vw'
                  />
                </div>
                <h3 className='mt-2 text-center text-sm font-semibold md:text-base'>{image.alt}</h3>
              </div>
            );
          })}
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;
