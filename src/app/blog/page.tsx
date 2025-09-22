// app/blog/page.tsx
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="w-full text-center">
      <h1 className="text-6xl font-bold text-white mb-4">The Pineapple Blog</h1>
      <p className="text-xl text-gray-300 mb-12">
        News, tips, and insights on healthy eating for your family.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        <div className="bg-gray-900 p-6 rounded-lg border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-2">5 Healthy Breakfast Ideas for Busy Mornings</h2>
          <p className="text-gray-400 mb-4">Start your day right with these quick and nutritious recipes that your kids will love.</p>
          <Link href="/blog/healthy-breakfast-ideas" className="text-green-400 font-semibold hover:text-green-300">Read More &rarr;</Link>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-2">Understanding Macronutrients: A Guide for Parents</h2>
          <p className="text-gray-400 mb-4">Learn the basics of proteins, carbs, and fats to make informed decisions about your family&apos;s diet.</p> {/* Fixed apostrophe */}
          <Link href="/blog/understanding-macronutrients" className="text-green-400 font-semibold hover:text-green-300">Read More &rarr;</Link>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-2">How to Read Nutrition Labels Like a Pro</h2>
          <p className="text-gray-400 mb-4">Decode the confusing world of food labels and choose the healthiest options at the supermarket.</p>
          <Link href="/blog/reading-nutrition-labels" className="text-green-400 font-semibold hover:text-green-300">Read More &rarr;</Link>
        </div>
      </div>
    </div>
  );
}