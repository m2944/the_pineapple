// app/components/TestimonialCard.tsx

import Image from 'next/image';

type TestimonialCardProps = {
  quote: string;
  name: string;
  avatarSrc: string;
};

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006Z" clipRule="evenodd" />
  </svg>
);

export default function TestimonialCard({ quote, name, avatarSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md">
      <p className="text-gray-700 italic">&quot;{quote}&quot;</p>
      <div className="flex items-center mt-4">
        <Image src={avatarSrc} width={40} height={40} alt={name} className="rounded-full mr-3" />
        <div>
          <div className="flex">
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
          </div>
          <p className="text-sm font-semibold text-gray-900 mt-1">{name}</p>
        </div>
      </div>
    </div>
  );
}