'use client';

import { useState } from 'react';
import { Image, buildSrc } from '@imagekit/next';

import { cn } from '@/utils/class-name';

export default function IKImage({ src, alt, className, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const blurUrl = buildSrc({
    urlEndpoint: 'https://ik.imagekit.io/ikmedia',
    src: src,
    transformation: [
      {
        quality: 10,
        blur: 90
      }
    ]
  });

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div
        className={cn(
          'absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-500',
          isLoaded ? 'opacity-0' : 'opacity-100'
        )}
        style={{
          backgroundImage: `url(${blurUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}
      />

      <Image
        src={src}
        alt={alt}
        {...props}
        className={cn(
          'block h-auto w-full transition-opacity duration-700',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        urlEndpoint='https://ik.imagekit.io/ikmedia'
        loading='lazy'
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
