// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full max-w-5xl text-gray-400 border-t border-gray-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-white">The Pineapple</h3>
          <p className="mt-2 text-sm">Your partner in healthy eating.</p>
          <form 
            action="PASTE_YOUR_FORMSPREE_URL_HERE" 
            method="POST" 
            className="mt-4 flex gap-2"
          >
            <input 
              type="email" 
              name="email"
              placeholder="Enter email address"
              className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button 
              type="submit"
              className="bg-green-500 text-black font-bold px-4 py-2 rounded-md hover:bg-green-600 transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex gap-8 mt-8 md:mt-0">
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/#features" className="hover:text-white">Features</Link>
            <Link href="/#pricing" className="hover:text-white">Pricing</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-12 pt-8 border-t border-gray-800">
        <p>&copy; 2025 The Pineapple. All rights reserved.</p>
      </div>
    </footer>
  );
}