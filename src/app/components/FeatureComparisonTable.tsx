// app/components/FeatureComparisonTable.tsx
import Image from 'next/image';

export default function FeatureComparisonTable() {
  // Helper for checkmark icon
  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-green-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );

  // Helper for cross icon
  const CrossIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-red-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );

  return (
    <div className="w-full max-w-4xl mx-auto mt-20">
      <h2 className="text-4xl font-bold text-white text-center mb-6">The Pineapple vs. The Rest</h2>
      <div className="text-center mb-12">
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold inline-flex items-center space-x-2 hover:bg-gray-200 transition-colors">
          {/* Apple Logo SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 0C9.642 0 7.375 1.507 6.136 3.61c-1.239 2.103-1.63 4.67-.84 7.005C6.182 13.88 8 16.035 8 17.5a2.5 2.5 0 0 0 2.5 2.5c.915 0 1.696-.34 2.196-.867C13.196 18.783 14 18 14 17.5c0-.986-.448-1.785-1.25-2.298C13.52 14.707 15.155 15.5 16.5 15.5c.875 0 1.67-.182 2.375-.494C19.673 14.686 20 13.86 20 13c0-2.222-1.778-4.444-4.5-5.5C13.778 6.556 12 5.5 12 5.5s-1.778-1.056-4.5-2c-2.722-1.056-4.5-3.278-4.5-5.5C3 0 5 0 12 0zM12 21a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" />
          </svg>
          <span>Download for iOS</span>
        </button>
      </div>

      <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
        <table className="min-w-full text-white">
          <thead>
            <tr className="bg-gray-800 text-gray-300 uppercase text-sm leading-normal">
              <th className="py-4 px-6 text-left"></th> {/* Empty corner */}
              <th className="py-4 px-6 text-center">The Pineapple App</th>
              <th className="py-4 px-6 text-center">The Orange App</th>
              <th className="py-4 px-6 text-center">The Banana App</th>
            </tr>
          </thead>
          <tbody className="text-gray-400 text-sm font-light">
            {/* Row 1: Detailed Product Breakdown */}
            <tr className="border-b border-gray-700 hover:bg-gray-800">
              <td className="py-4 px-6 text-left whitespace-nowrap font-medium">Detailed Product Breakdown</td>
              <td className="py-4 px-6 text-center"><CheckIcon /></td>
              <td className="py-4 px-6 text-center"><CheckIcon /></td>
              <td className="py-4 px-6 text-center"><CheckIcon /></td>
            </tr>
            {/* Row 2: Comprehensive Water Data */}
            <tr className="border-b border-gray-700 hover:bg-gray-800">
              <td className="py-4 px-6 text-left whitespace-nowrap font-medium">Comprehensive Water Data</td>
              <td className="py-4 px-6 text-center"><CheckIcon /></td>
              <td className="py-4 px-6 text-center"><CrossIcon /></td>
              <td className="py-4 px-6 text-center"><CrossIcon /></td>
            </tr>
            {/* Row 3: Seed Oil Free Dining Map */}
            <tr className="border-b border-gray-700 hover:bg-gray-800">
              <td className="py-4 px-6 text-left whitespace-nowrap font-medium">Seed Oil Free Dining Map</td>
              <td className="py-4 px-6 text-center"><CheckIcon /></td>
              <td className="py-4 px-6 text-center"><CrossIcon /></td>
              <td className="py-4 px-6 text-center"><CrossIcon /></td>
            </tr>
            {/* Row 4: Seed Oil Flagging */}
            <tr className="border-b border-gray-700 hover:bg-gray-800">
              <td className="py-4 px-6 text-left whitespace-nowrap font-medium">Seed Oil Flagging</td>
              <td className="py-4 px-6 text-center"><CheckIcon /></td>
              <td className="py-4 px-6 text-center"><CrossIcon /></td>
              <td className="py-4 px-6 text-center"><CheckIcon /></td>
            </tr>
            {/* Row 5: Certified Lab-Testing Data */}
            <tr className="hover:bg-gray-800">
              <td className="py-4 px-6 text-left whitespace-nowrap font-medium">Certified Lab-Testing Data</td>
              <td className="py-4 px-6 text-center"><CheckIcon /></td>
              <td className="py-4 px-6 text-center"><CrossIcon /></td>
              <td className="py-4 px-6 text-center"><CrossIcon /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}