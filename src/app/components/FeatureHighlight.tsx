// app/components/FeatureHighlight.tsx
import Image from 'next/image';

// The props this component accepts
type FeatureHighlightProps = {
  title: string;
  features: string[]; // An array of strings for the bullet points
  imageSrc: string;
  reverse?: boolean; // An optional prop to reverse the layout
};

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-green-500 mr-3 flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

export default function FeatureHighlight({ title, features, imageSrc, reverse = false }: FeatureHighlightProps) {
  // This line determines the layout order based on the 'reverse' prop
  const flexDirection = reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <section className="w-full">
      <div className={`flex flex-col ${flexDirection} gap-12 items-center w-full`}>
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-8">{title}</h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-lg text-gray-300">
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Image Content */}
        <div className="md:w-1/2">
          <Image 
            src={imageSrc}
            width={600}
            height={400}
            alt={title}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}