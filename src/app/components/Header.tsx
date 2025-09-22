// app/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import MegaMenuItem from './MegaMenuItem';
import BlogMenuItem from './BlogMenuItem';

// Placeholder Icons
const AllergyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>;
const GlutenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9.75a4.5 4.5 0 0 1-4.5 4.5H8.25a4.5 4.5 0 0 1-4.5-4.5V4.5m18 5.25v-5.25a4.5 4.5 0 0 0-4.5-4.5H4.5a4.5 4.5 0 0 0-4.5 4.5v10.5a4.5 4.5 0 0 0 4.5 4.5h10.5a4.5 4.5 0 0 0 4.5-4.5v-5.25" /></svg>;
const DairyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10.5 11.25h3M12 3.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H10.875c-.621 0-1.125-.504-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h1.125Z" /></svg>;
const IngredientIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>;


export default function Header() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    // Removed the bg-black from this container
    <div className="w-full">
      <header 
        className="w-full max-w-5xl mx-auto flex justify-between items-center py-4 px-4 md:px-0 relative z-50"
      >
        <Link href="/">
          <h1 className="text-2xl font-bold">The Pineapple</h1>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {/* Solutions Menu */}
          <div 
            className="relative py-4 -my-4 px-8 -mx-8 flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <span className="hover:text-gray-700">Solutions</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-3 h-3 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
            {isSolutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-2 gap-x-12 gap-y-4 w-[768px]">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <MegaMenuItem icon={<AllergyIcon />} title="Allergy Scanning" description="Scan groceries and even bottled water to reveal hidden ingredients" href="/solutions/allergy" onClick={() => setIsSolutionsOpen(false)} />
                    <MegaMenuItem icon={<GlutenIcon />} title="Gluten Free Scanning" description="Wheat, barley, rye, or their derivatives, the scanner flags any gluten-containing ingredients" href="/solutions/gluten-free" onClick={() => setIsSolutionsOpen(false)} />
                    <MegaMenuItem icon={<DairyIcon />} title="Dairy and Lactose Scanning" description="Detect common dairy-derived ingredients like casein, whey, lactose, and more" href="/solutions/dairy" onClick={() => setIsSolutionsOpen(false)} />
                    <MegaMenuItem icon={<IngredientIcon />} title="Ingredient Checking" description="Decode complex ingredient labels in seconds, with easy-to-understand alerts." href="/solutions/ingredients" onClick={() => setIsSolutionsOpen(false)} />
                  </div>
                  <Link href="/blog" onClick={() => setIsSolutionsOpen(false)} className="block relative w-full h-full rounded-lg overflow-hidden group">
                    <Image 
                      src="/family_feeding.jpg"
                      alt="Blog promo" 
                      fill 
                      style={{ objectFit: 'cover' }} 
                      className="group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div className="absolute bottom-0 left-0 p-4"><h4 className="font-bold text-white text-lg">5 Amazing dishes to eat on long vacations</h4></div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <Link href="/#features" className="hover:text-gray-700">Features</Link>
          <Link href="/#pricing" className="hover:text-gray-700">Pricing</Link> 

          {/* Blog Menu */}
          <div 
            className="relative py-4 -my-4 px-8 -mx-8 flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setIsBlogOpen(true)}
            onMouseLeave={() => setIsBlogOpen(false)}
          >
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-3 h-3 transition-transform duration-200 ${isBlogOpen ? 'rotate-180' : ''}`}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
            {isBlogOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 w-[400px]">
                  <BlogMenuItem imageSrc="https://placehold.co/128x128/cccccc/333333/png?text=Article+1" title="5 Amazing dishes..." description="A short preview of the blog post content goes here." href="/blog" onClick={() => setIsBlogOpen(false)} />
                  <BlogMenuItem imageSrc="https://placehold.co/128x128/cccccc/333333/png?text=Article+2" title="Understanding Macronutrients..." description="A short preview of the blog post content goes here." href="/blog" onClick={() => setIsBlogOpen(false)} />
                  <BlogMenuItem imageSrc="https://placehold.co/128x128/cccccc/333333/png?text=Article+3" title="How to Read Nutrition Labels..." description="A short preview of the blog post content goes here." href="/blog" onClick={() => setIsBlogOpen(false)} />
                </div>
              </div>
            )}
          </div>
          
          <button className="hover:text-gray-700 cursor-pointer">Restaurants</button>
          <button className="hover:text-gray-700 cursor-pointer">Food</button>

        </nav>
        <button className="bg-[var(--accent-color)] text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
          <span>Get Olive</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </header>
    </div>
  );
}