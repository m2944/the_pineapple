// app/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full text-white flex justify-between items-center py-4">
      <Link href="/">
        <h1 className="text-2xl font-bold">The Pineapple</h1>
      </Link>
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/solutions" className="hover:text-gray-300">Solutions</Link>
        <Link href="/#features" className="hover:text-gray-300">Features</Link>
        <Link href="/#pricing" className="hover:text-gray-300">Pricing</Link> 
        <Link href="/blog" className="hover:text-gray-300">Blog</Link>
      </nav>
      <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
        Get Started
      </button>
    </header>
  );
}