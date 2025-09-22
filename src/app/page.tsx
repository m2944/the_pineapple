// app/page.tsx

import FeatureCard from "./components/FeatureCard";
import Image from "next/image";
import FaqItem from "./components/FaqItem";
import FeatureComparisonTable from "./components/FeatureComparisonTable";
import FeatureHighlight from "./components/FeatureHighlight";
import TestimonialCard from "./components/TestimonialCard";
import CtaCarouselCard from "./components/CtaCarouselCard";

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006Z" clipRule="evenodd" />
    </svg>
  );
  
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-400 mr-2">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.06-1.06L10.5 14.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l4.5-4.5Z" clipRule="evenodd" />
    </svg>
);

export default function HomePage() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="w-full flex flex-col items-center text-center -mt-24">
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
              The Safest Way to
              <br />
              <span className="text-green-400">Shop for Groceries</span>
            </h2>
            <p className="text-white/80 mt-8 text-lg max-w-2xl mx-auto">
              Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family&apos;s Diet and Get Expert-Backed Food Insights.
            </p>
            <div className="mt-12 flex justify-center items-center gap-4">
                <button className="bg-green-500 hover:bg-green-600 transition-colors text-black px-6 py-3 rounded-full font-bold text-lg inline-flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 0C9.642 0 7.375 1.507 6.136 3.61c-1.239 2.103-1.63 4.67-.84 7.005C6.182 13.88 8 16.035 8 17.5a2.5 2.5 0 0 0 2.5 2.5c.915 0 1.696-.34 2.196-.867C13.196 18.783 14 18 14 17.5c0-.986-.448-1.785-1.25-2.298C13.52 14.707 15.155 15.5 16.5 15.5c.875 0 1.67-.182 2.375-.494C19.673 14.686 20 13.86 20 13c0-2.222-1.778-4.444-4.5-5.5C13.778 6.556 12 5.5 12 5.5s-1.778-1.056-4.5-2c-2.722-1.056-4.5-3.278-4.5-5.5C3 0 5 0 12 0zM12 21a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" />
                  </svg>
                  <span>Download for iOS</span>
                </button>
                <button className="text-white hover:text-gray-300 font-semibold">
                    Join the Olive Community &rarr;
                </button>
            </div>
          </div>
          <div className="bg-gray-900 border-8 border-gray-800 rounded-3xl p-2 w-full max-w-sm mx-auto">
               <video 
                src="/app-animation.mp4" 
                width="480"
                height="816"
                autoPlay 
                loop 
                muted 
                playsInline
                className="rounded-2xl"
               >
                Your browser does not support the video tag.
               </video>
          </div>
        </div>
      </div>

      {/* --- FEATURES SECTION (the three cards) --- */}
      <section id="features-cards" className="w-full flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-white">How the Olive Food Scanner App Works</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <FeatureCard 
            videoSrc="/feature_video_1.mp4"
            title="Scan & Detect" 
            description="When you open Olive simply scan the barcode to instantly detect product ingredients. Olive’s intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan." 
          />
          <FeatureCard 
            videoSrc="/feature_video_2.mp4"
            title="Data Analysis & Validation" 
            description="After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess." 
          />
          <FeatureCard 
            videoSrc="/feature_video_3.mp4"
            title="Actionable Insights & Recommendations" 
            description="Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health & nutrition." 
          />
        </div>
      </section>

      {/* --- HEALTH BENEFITS HEADLINE SECTION --- */}
      <section className="w-full text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <h2 className="text-5xl font-bold text-white">Health Benefits of Using Olive</h2>
            <div>
              <p className="text-lg text-gray-300 mb-4">
                Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family’s health.
              </p>
              <button className="bg-white text-black px-4 py-2 rounded-full font-semibold inline-flex items-center space-x-2 hover:bg-gray-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C9.642 0 7.375 1.507 6.136 3.61c-1.239 2.103-1.63 4.67-.84 7.005C6.182 13.88 8 16.035 8 17.5a2.5 2.5 0 0 0 2.5 2.5c.915 0 1.696-.34 2.196-.867C13.196 18.783 14 18 14 17.5c0-.986-.448-1.785-1.25-2.298C13.52 14.707 15.155 15.5 16.5 15.5c.875 0 1.67-.182 2.375-.494C19.673 14.686 20 13.86 20 13c0-2.222-1.778-4.444-4.5-5.5C13.778 6.556 12 5.5 12 5.5s-1.778-1.056-4.5-2c-2.722-1.056-4.5-3.278-4.5-5.5C3 0 5 0 12 0zM12 21a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" />
                </svg>
                <span>Download for iOS</span>
              </button>
            </div>
          </div>
      </section>
      
      {/* --- Feature Highlight Sections --- */}
      <FeatureHighlight
        title="Achieve Nutritional Clarity"
        features={[
          "Olive breaks down every ingredient into clear, actionable information.",
          "Olive scores products out of 100 based on additives, seedoils, processing level, and detected toxins.",
          "Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes."
        ]}
        imageSrc="/clarity.jpg"
      />
      <FeatureHighlight
        title="Proactive Ingredient Filtering"
        features={[
          "Olive flags harmful additives and controversial ingredients before they become mainstream concerns.",
          "Keeps you ahead of potential food safety concerns.",
          "Gives busy parents the confidence to make safer food choices every time."
        ]}
        imageSrc="/filtering.jpg"
        reverse={true}
      />
      <FeatureHighlight
        title="Real Health Outcomes for Your Family"
        features={[
          "Empowers parents to feel more in control of their family's health.",
          "Delivers personalized suggestions for healthier food choices.",
          "Promotes long-term well-being through informed, balanced decisions."
        ]}
        imageSrc="/outcomes.jpg"
      />
      
      {/* --- TESTIMONIALS SECTION --- */}
      <section className="w-full mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Part 1: Left Side */}
          <div className="relative">
            <div className="absolute -bottom-8 -left-8 z-10 w-full max-w-md">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <p className="text-gray-700 italic">&quot;After just a week of using Olive, I feel more in control of my family’s nutrition than ever before. It’s empowering to make informed choices so quickly.&quot;</p>
                <div className="flex mt-4">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <p className="text-sm font-semibold text-gray-900 mt-2">Lila M.</p>
              </div>
            </div>
            <Image 
              src="/mother.jpg"
              width={491}
              height={491}
              alt="A mother with her children, happy and healthy"
              className="rounded-2xl object-cover relative z-0"
            />
          </div>

          {/* Part 2: Right Side */}
          <div className="flex flex-col items-start space-y-8">
            <h2 className="text-6xl font-bold text-white">Real Mothers<br/>Real Results</h2>
            <a href="#" className="text-green-400 font-semibold hover:text-green-300">Read all 3,000+ reviews &rarr;</a>
            
            <div className="space-y-6 w-full">
              <TestimonialCard 
                quote="Olive has completely changed the way I shop for my family. I feel confident knowing exactly what’s in our food before it ever hits our pantry."
                name="Megan L."
                avatarSrc="https://randomuser.me/api/portraits/women/11.jpg"
              />
              <div className="pl-8">
                <TestimonialCard 
                  quote="Meal planning used to be stressful. Now I can, get recommendations, and feel great about what my kids are eating. It’s that easy."
                  name="Tina B."
                  avatarSrc="https://randomuser.me/api/portraits/women/12.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- FEATURE COMPARISON TABLE --- */}
      <section id="features">
        <FeatureComparisonTable />
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="w-full flex flex-col items-center text-center mt-20">
        <h2 className="text-5xl font-bold text-white mb-4">Healthy Choices<br/>Honest Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-12">
          {/* Monthly Plan */}
          <div className="flex flex-col p-8 bg-gray-900 rounded-lg border border-gray-700 text-left">
            <h3 className="text-lg font-semibold text-green-400">Monthly</h3>
            <p className="text-4xl font-extrabold text-white mt-2">$14.99<span className="text-lg font-normal text-gray-400">/monthly</span></p>
            <ul className="text-gray-300 mt-6 space-y-3">
              <li className="flex items-center"><CheckIcon /> Unlimited Scans</li>
              <li className="flex items-center"><CheckIcon /> Unlimited Database Searches</li>
              <li className="flex items-center"><CheckIcon /> Comprehensive Lab-Testing Data</li>
            </ul>
            <button className="mt-8 w-full bg-green-500 text-black font-bold py-3 rounded-md hover:bg-green-600 transition-colors">
              Subscribe
            </button>
          </div>
          {/* Yearly Plan */}
          <div className="flex flex-col p-8 bg-green-600 text-white rounded-lg border-2 border-green-500 text-left">
            <h3 className="text-lg font-semibold">Yearly</h3>
            <p className="text-4xl font-extrabold mt-2">$69.99<span className="text-lg font-normal text-gray-200 line-through ml-2">$179.88</span><span className="text-lg font-normal text-gray-200">/yearly</span></p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center"><CheckIcon /> Everything in monthly plan</li>
              <li className="flex items-center"><CheckIcon /> Get 7 months free</li>
              <li className="flex items-center"><CheckIcon /> 60% Savings</li>
            </ul>
            <button className="mt-8 w-full bg-white text-black font-bold py-3 rounded-md hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* --- CTA CAROUSEL CARD --- */}
      <CtaCarouselCard />

      {/* --- INDEPENDENT SECTION --- */}
      <section className="w-full mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <h2 className="text-7xl font-bold text-pink-400 leading-tight">
                100% Independent.
                <br/>
                Always.
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed">
                We <span className="underline decoration-green-500">never monetize</span> through brand deals, affiliate links, or ads — so you can <span className="underline decoration-green-500">trust our recommendations</span> are always aligned with our users.
            </p>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="w-full flex flex-col items-center text-center mt-20">
        <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions by Parents</h2>
        <div className="text-center my-8">
            <button className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center space-x-2 border border-gray-700 hover:bg-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0C9.642 0 7.375 1.507 6.136 3.61c-1.239 2.103-1.63 4.67-.84 7.005C6.182 13.88 8 16.035 8 17.5a2.5 2.5 0 0 0 2.5 2.5c.915 0 1.696-.34 2.196-.867C13.196 18.783 14 18 14 17.5c0-.986-.448-1.785-1.25-2.298C13.52 14.707 15.155 15.5 16.5 15.5c.875 0 1.67-.182 2.375-.494C19.673 14.686 20 13.86 20 13c0-2.222-1.778-4.444-4.5-5.5C13.778 6.556 12 5.5 12 5.5s-1.778-1.056-4.5-2c-2.722-1.056-4.5-3.278-4.5-5.5C3 0 5 0 12 0zM12 21a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" />
                </svg>
                <span>Download for iOS</span>
            </button>
        </div>
        <div className="w-full max-w-3xl">
          <FaqItem 
            question="What is the Food Scanner App and how does it work?" 
            answer="Olive is a comprehensive tool designed to help busy parents make informed food choices. By scanning product barcodes, it quickly identifies harmful ingredients and suggests safer alternatives, ensuring that you always stay ahead of potential health risks." 
          />
          <FaqItem 
            question="How does Olive ensure the accuracy of the Food Scanner App results?" 
            answer="Olive leverages an extensive, up-to-date food database and expert nutritional guidelines to offer precise feedback. The Food Scanner App cross-references real-world data with independent analyses to deliver reliable, actionable insights tailored for your family’s needs." 
          />
          <FaqItem 
            question="Which products can I scan with the Food Scanner App?" 
            answer="Olive is versatile, allowing you to scan a wide range of food and bottled water products. Olive's technology is designed to pinpoint nutritional details and detect potential contaminants, making it easier than ever to keep your family safe." 
          />
          <FaqItem 
            question="Can the Food Scanner App be customized to my family’s dietary needs?" 
            answer="Absolutely. With Olive’s fully customizable filters, the food scanner app lets you set dietary preferences and allergies. This personalization ensures that every recommendation, from ingredient filtering to healthier product suggestions, aligns perfectly with your family’s unique needs." 
          />
          <FaqItem 
            question="Is my data secure when I use the Olive?" 
            answer="Yes, your privacy is our top priority. Olive’s food scanner app employs robust security protocols to safeguard your personal information while delivering transparent and accurate nutritional insights, allowing you to rest easy with every scan." 
          />
           <FaqItem 
            question="When will the Android version of the Food Scanner App be available?" 
            answer="The Android version of the Olive Food Scanner App is currently in development and is expected to be released in Q3 2024. Please subscribe to our newsletter for updates on the official launch date and features!" 
          />
        </div>
      </section>

      {/* --- FINAL PROMOTIONAL CARD SECTION --- */}
      <section className="w-full mt-20">
        <div className="relative w-full max-w-4xl mx-auto bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/family_card.jpg"
            alt="Family enjoying a meal, with Olive app overlay"
            width={1000} // Adjust width and height based on your image dimensions for best quality
            height={500} // This will likely be cropped by object-cover, but provides aspect ratio
            className="w-full h-auto object-cover absolute inset-0"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-10 p-16 text-center text-white flex flex-col items-center justify-center h-full">
            <h2 className="text-5xl font-bold mb-4">Keep your family safe with Olive</h2>
            <ul className="text-xl space-y-3 mb-8 text-left">
              <li className="flex items-center">
                <CheckIcon /> {/* Reusing the CheckIcon for consistency */}
                <span>Effortless food scanning</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span>Peace of mind for parents</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span>Healthy product recommendations</span>
              </li>
            </ul>
            <button className="bg-green-500 hover:bg-green-600 transition-colors text-black px-8 py-3 rounded-full font-bold text-lg inline-flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 0C9.642 0 7.375 1.507 6.136 3.61c-1.239 2.103-1.63 4.67-.84 7.005C6.182 13.88 8 16.035 8 17.5a2.5 2.5 0 0 0 2.5 2.5c.915 0 1.696-.34 2.196-.867C13.196 18.783 14 18 14 17.5c0-.986-.448-1.785-1.25-2.298C13.52 14.707 15.155 15.5 16.5 15.5c.875 0 1.67-.182 2.375-.494C19.673 14.686 20 13.86 20 13c0-2.222-1.778-4.444-4.5-5.5C13.778 6.556 12 5.5 12 5.5s-1.778-1.056-4.5-2c-2.722-1.056-4.5-3.278-4.5-5.5C3 0 5 0 12 0zM12 21a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" />
              </svg>
              <span>Download for iOS</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}