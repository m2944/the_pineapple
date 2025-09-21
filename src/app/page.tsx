import FeatureCard from "./components/FeatureCard";
import Image from "next/image";
import FaqItem from "./components/FaqItem";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-24 p-8 md:p-24 bg-black">
      
      <div className="z-10 w-full max-w-5xl flex flex-col items-center gap-24">

        {/* --- HEADER & HERO SECTION --- */}
        <div className="w-full flex flex-col items-center text-center">
          <header className="w-full text-white flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold">The Pineapple What</h1>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-gray-300">Solutions</a>
              <a href="#" className="hover:text-gray-300">Features</a>
              <a href="#" className="hover:text-gray-300">Pricing</a>
              <a href="#" className="hover:text-gray-300">Blog</a>
            </nav>
            <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
              Get Started
            </button>
          </header>
          <div className="flex items-center gap-2 mt-4">
              <div className="flex -space-x-2 overflow-hidden">
                <Image className="inline-block h-6 w-6 rounded-full ring-2 ring-black" src="https://randomuser.me/api/portraits/women/79.jpg" alt="User avatar" width={24} height={24} />
                <Image className="inline-block h-6 w-6 rounded-full ring-2 ring-black" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User avatar" width={24} height={24} />
                <Image className="inline-block h-6 w-6 rounded-full ring-2 ring-black" src="https://randomuser.me/api/portraits/women/50.jpg" alt="User avatar" width={24} height={24} />
              </div>
              <p className="text-sm text-gray-400">Trusted by thousands of healthy families.</p>
          </div>
          <div className="mt-16">
            <div className="mb-16">
              <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                Track Your Calories.
                <br />
                <span className="text-green-400">Beautifully.</span>
              </h2>
              <p className="text-white/80 mt-8 text-lg max-w-2xl mx-auto">
                Welcome to The Pineapple What. The simplest, most elegant way to understand your diet and achieve your health goals. No noise, just results.
              </p>
              <div className="mt-12 flex justify-center gap-4">
                  <button className="bg-green-500 hover:bg-green-600 transition-colors text-black px-8 py-3 rounded-md font-bold text-lg">
                      Start Tracking Now
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 transition-colors text-white px-8 py-3 rounded-md font-bold text-lg">
                      How It Works
                  </button>
              </div>
            </div>
            <div className="bg-gray-900 border-8 border-gray-800 rounded-3xl p-2 w-full max-w-sm mx-auto">
                 <Image 
                  src="https://placehold.co/400x800/000000/FFFFFF/png?text=Your+App+Screenshot"
                  width={400}
                  height={800}
                  alt="A screenshot of the Pineapple What app's user interface inside a phone mockup."
                  className="rounded-2xl"
                />
            </div>
          </div>
        </div>

        {/* --- FEATURES SECTION --- */}
        <section className="w-full flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-white">Everything you need. Nothing you don&apos;t.</h2>
          <p className="text-white/60 mt-4 max-w-2xl">
            Our features are designed for simplicity and power, helping you focus on what truly matters: your health.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <FeatureCard icon={<SearchIcon />} title="Effortless Logging" description="Quickly log meals with our massive food database and intuitive search." />
            <FeatureCard icon={<ChartIcon />} title="Visual Progress" description="Track your macros and weight with beautiful, easy-to-read charts and graphs." />
            <FeatureCard icon={<RecipeIcon />} title="Smart Recipes" description="Discover healthy recipes that fit your calorie goals and dietary needs." />
          </div>
        </section>

        {/* --- HOW IT WORKS SECTION --- */}
        <section className="w-full flex flex-col items-center text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-12 md:mb-16">See how it works.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
            <div>
              <Image src="https://placehold.co/600x400/000000/FFFFFF/png?text=App+Screenshot+Here" width={600} height={400} alt="A screenshot of the Pineapple What app's user interface." className="rounded-xl shadow-lg" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-4">A simple 3-step process.</h3>
              <p className="text-white/70 mb-8">Get started in seconds and take control of your diet. We remove the friction so you can focus on success.</p>
              <ul className="text-white/80 space-y-4">
                <li><span className="bg-green-500 text-black font-bold px-2 py-1 rounded-full mr-2">1</span><span className="font-medium text-lg">Log your meals effortlessly with our fast search.</span></li>
                <li><span className="bg-green-500 text-black font-bold px-2 py-1 rounded-full mr-2">2</span><span className="font-medium text-lg">See your progress and understand your habits.</span></li>
                <li><span className="bg-green-500 text-black font-bold px-2 py-1 rounded-full mr-2">3</span><span className="font-medium text-lg">Reach your goals and feel great!</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- PRICING SECTION --- */}
        <section className="w-full flex flex-col items-center text-center mt-20">
          <h2 className="text-4xl font-bold text-white mb-4">Choose the Perfect Plan</h2>
          <p className="text-white/70 max-w-2xl mb-12">Start with our free plan and upgrade when you&apos;re ready. No credit card required to start!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="flex flex-col items-center p-8 bg-gray-900 rounded-lg border border-white/10">
              <h3 className="text-2xl font-bold text-white">Free</h3>
              <p className="text-4xl font-extrabold text-white mt-4">$0<span className="text-sm font-normal text-white/60">/month</span></p>
              <ul className="text-gray-400 mt-6 text-left w-full space-y-2">
                <li>✅ 1 User Account</li><li>✅ Basic Calorie Tracking</li><li>✅ Food Database Access</li><li>❌ Recipe suggestions</li><li>❌ Priority Support</li>
              </ul>
              <button className="mt-8 w-full bg-white text-black font-bold py-3 rounded-md hover:bg-gray-200 transition-colors">Start for Free</button>
            </div>
            <div className="flex flex-col items-center p-8 bg-black rounded-lg border-2 border-green-500 relative">
              <div className="absolute -top-3 px-4 py-1 rounded-full bg-green-500 text-black text-sm font-bold">Most Popular</div>
              <h3 className="text-2xl font-bold text-white">Pro</h3>
              <p className="text-4xl font-extrabold text-white mt-4">$9<span className="text-sm font-normal text-white/60">/month</span></p>
              <ul className="text-gray-200 mt-6 text-left w-full space-y-2">
                <li>✅ Everything in Free</li><li>✅ Unlimited Users</li><li>✅ **Smart Recipe Suggestions**</li><li>✅ **Premium Analytics**</li><li>✅ **Priority Support**</li>
              </ul>
              <button className="mt-8 w-full bg-green-500 text-black font-bold py-3 rounded-md hover:bg-green-600 transition-colors">Get Started</button>
            </div>
            <div className="flex flex-col items-center p-8 bg-gray-900 rounded-lg border border-white/10">
              <h3 className="text-2xl font-bold text-white">Business</h3>
              <p className="text-4xl font-extrabold text-white mt-4">$29<span className="text-sm font-normal text-white/60">/month</span></p>
              <ul className="text-gray-400 mt-6 text-left w-full space-y-2">
                <li>✅ Everything in Pro</li><li>✅ Dedicated Manager</li><li>✅ Team Reporting</li><li>✅ API Access</li><li>✅ 24/7 Phone Support</li>
              </ul>
              <button className="mt-8 w-full bg-white text-black font-bold py-3 rounded-md hover:bg-gray-200 transition-colors">Get Started</button>
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="w-full flex flex-col items-center text-center mt-20">
          <h2 className="text-4xl font-bold text-white mb-4">Questions from Parents</h2>
          <p className="text-white/70 max-w-2xl mb-12">
            We&apos;re here to help you make the best choices for your family&apos;s health.
          </p>
          <div className="w-full max-w-3xl">
            <FaqItem question="Is this app suitable for children and teenagers?" answer="Absolutely. Our app is designed to promote healthy habits, not restrictive dieting. It focuses on balanced nutrition and understanding food, making it a great educational tool for teenagers learning about their health." />
            <FaqItem question="How does the app handle food allergies?" answer="You can set up detailed allergy profiles for each family member. The app will then flag any logged foods or recipes that contain specified allergens, helping you keep your family safe." />
            <FaqItem question="Can I track the nutrition for my whole family in one account?" answer="Yes! Our Pro plan allows you to create multiple profiles under one account, so you can easily manage and monitor the nutritional intake for your entire family from one convenient place." />
            <FaqItem question="Is the food database verified?" answer="Our food database is curated from verified sources, including national food databases and certified nutritionists. We prioritize accuracy to ensure you can trust the information you&apos;re logging." />
          </div>
        </section>

        {/* --- CALL TO ACTION SECTION --- */}
        <section className="w-full mt-20">
            <div className="w-full max-w-4xl mx-auto bg-gray-900 rounded-lg p-12 text-center">
                <h2 className="text-4xl font-bold text-white">Ready to Take Control?</h2>
                <p className="text-white/70 mt-4 mb-8">Join thousands of others on their journey to better health. Get started for free today.</p>
                <button className="bg-green-500 hover:bg-green-600 transition-colors text-black px-8 py-3 rounded-md font-bold text-lg">
                    Sign Up for Free
                </button>
            </div>
        </section>
      </div>

      {/* --- FOOTER --- */}
      <footer className="w-full max-w-5xl text-gray-400 border-t border-gray-800 mt-24 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div>
                <h3 className="text-xl font-bold text-white">The Pineapple What</h3>
                <p className="mt-2 text-sm">Your partner in healthy eating.</p>
            </div>
            <div className="flex gap-8 mt-8 md:mt-0">
                <div className="flex flex-col gap-2 text-sm">
                    <a href="#" className="hover:text-white">Features</a>
                    <a href="#" className="hover:text-white">Pricing</a>
                    <a href="#" className="hover:text-white">Blog</a>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                    <a href="#" className="hover:text-white">About Us</a>
                    <a href="#" className="hover:text-white">Contact</a>
                    <a href="#" className="hover:text-white">Careers</a>
                </div>
            </div>
        </div>
        <div className="text-center text-sm mt-12 pt-8 border-t border-gray-800">
            <p>&copy; 2025 The Pineapple What. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}


// --- SVG Icon Components ---
function SearchIcon() {return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-400"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>);}
function ChartIcon() {return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-400"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-12a2.25 2.25 0 0 1-2.25-2.25V3.75m16.5 0v16.5h-16.5" /></svg>);}
function RecipeIcon() {return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>);}