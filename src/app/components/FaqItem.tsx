// This special line at the top tells Next.js that this component needs to run
// in the user's browser because it's interactive (it has state).
'use client';

// We import 'useState' from React to manage the open/closed state.
import { useState } from 'react';

// Define the props our component will accept.
type FaqItemProps = {
  question: string;
  answer: string;
};

export default function FaqItem({ question, answer }: FaqItemProps) {
  // Here's the magic! We create a state variable called 'isOpen'.
  // It starts as 'false' (closed). 'setIsOpen' is the function we use to change it.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 py-4">
      <button
        // When the button is clicked, we flip the value of 'isOpen'.
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-white"
      >
        <span>{question}</span>
        {/* This SVG icon will rotate based on the 'isOpen' state */}
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      
      {/* This is conditional rendering. The answer only appears if 'isOpen' is true. */}
      {isOpen && (
        <div className="mt-4 text-gray-400">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}