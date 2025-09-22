// app/solutions/gluten-free/page.tsx
import Image from 'next/image';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export default function GlutenFreePage() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Column: Text Content */}
      <div className="text-center md:text-left">
        <p className="text-sm text-gray-400 mb-8">Trusted by thousands of healthy families.</p>
        <h1 className="text-6xl font-bold text-white leading-tight mb-6">
          Gluten-free living made simple. Instantly check labels for hidden gluten with Olive
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Shop confidently with Olive’s gluten-free scanner. Designed for busy parents, it instantly highlights hidden ingredients, helping you protect your family’s health without the stress.
        </p>
        <div className="flex justify-center md:justify-start items-center gap-4 mb-12">
            <button className="bg-green-500 hover:bg-green-600 transition-colors text-black px-6 py-3 rounded-full font-bold inline-flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0C9.642 0 7.375 1.507 6.136 3.61c-1.239 2.103-1.63 4.67-.84 7.005C6.182 13.88 8 16.035 8 17.5a2.5 2.5 0 0 0 2.5 2.5c.915 0 1.696-.34 2.196-.867C13.196 18.783 14 18 14 17.5c0-.986-.448-1.785-1.25-2.298C13.52 14.707 15.155 15.5 16.5 15.5c.875 0 1.67-.182 2.375-.494C19.673 14.686 20 13.86 20 13c0-2.222-1.778-4.444-4.5-5.5C13.778 6.556 12 5.5 12 5.5s-1.778-1.056-4.5-2c-2.722-1.056-4.5-3.278-4.5-5.5C3 0 5 0 12 0zM12 21a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" /></svg>
                <span>Download for iOS</span>
            </button>
            <button className="text-white hover:text-gray-300 font-semibold">
                Join the Olive Community &rarr;
            </button>
        </div>
        <ul className="space-y-3 text-gray-400 text-left">
          <li className="flex items-center"><CheckIcon /> Detailed analysis on food and water products</li>
          <li className="flex items-center"><CheckIcon /> Personalized, healthier product suggestions</li>
          <li className="flex items-center"><CheckIcon /> A seed oil-free dining map</li>
        </ul>
      </div>
      {/* Right Column: Image */}
      <div>
        <Image src="https://placehold.co/500x1000/000000/FFFFFF/png?text=Gluten-Free+Scanner" width={500} height={1000} alt="Gluten-Free Scanner App" className="rounded-2xl mx-auto" />
      </div>
    </div>
  );
}