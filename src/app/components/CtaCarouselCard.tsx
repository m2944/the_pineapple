// app/components/CtaCarouselCard.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function CtaCarouselCard() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  // Updated to use your local images
  const yourImages = [
    "/promo_1.jpg",
    "/promo_2.jpg",
    "/promo_3.jpg",
    "/promo_4.jpg",
  ];

  return (
    <section className="w-full max-w-4xl mx-auto">
      <div className="bg-green-700 rounded-3xl overflow-hidden shadow-2xl">
        
        <div className="overflow-hidden relative" ref={emblaRef}>
          <div className="flex">
            {yourImages.map((src, index) => (
              <div className="relative flex-none w-full h-64" key={index}>
                <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                <Image
                  src={src}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-green-700 text-center p-12 -mt-16 rounded-t-3xl">
          <h2 className="text-4xl font-bold text-white">
            Protect Your Family From Hidden Toxins
          </h2>
          <button className="mt-6 bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
            Sign up for Olive today
          </button>
        </div>

      </div>
    </section>
  );
}