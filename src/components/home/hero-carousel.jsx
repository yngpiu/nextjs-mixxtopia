'use client';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import IKImage from '../shared/IKImage';

const HeroCarousel = ({ carouselImages }) => {
  const images = JSON.parse(carouselImages);

  return (
    <div className='mx-auto max-w-5xl'>
      <Carousel
        className='w-full shadow-xl'
        opts={{ loop: true }}
        plugins={[
          Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false }),
          Fade()
        ]}
      >
        <CarouselContent className='-ml-1'>
          {images.map(image => (
            <CarouselItem key={image.id} className='pl-1'>
              <div className='relative aspect-[3/2] h-full w-full lg:aspect-[16/7.8]'>
                <IKImage
                  src={image.url}
                  alt={image.alt}
                  fill
                  priority
                  className='rounded-lg object-cover object-[0%_10%]'
                  sizes='(max-width: 1024px) 100vw, 70vw'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
