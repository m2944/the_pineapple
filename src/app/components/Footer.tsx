// app/components/Footer.tsx
'use client';

export default function Footer() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("YOUR_FORMSPREE_URL_HERE", {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        alert("Thank you for subscribing!");
        (event.target as HTMLFormElement).reset();
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <footer className="w-full bg-green-800 text-white mt-24 rounded-t-3xl">
      <div className="w-full max-w-5xl mx-auto p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Explore More Olive Tools</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Explore Foods</a></li>
              <li><a href="#" className="hover:text-white">Allergy Scanner App</a></li>
              <li><a href="#" className="hover:text-white">Gluten Free Scanner</a></li>
              <li><a href="#" className="hover:text-white">Dairy Free App</a></li>
              <li><a href="#" className="hover:text-white">Food Ingredient Checker</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Email us</a></li>
            </ul>
          </div>
          <div className="md:text-right">
            <h2 className="text-3xl font-bold">Olive</h2>
            <p className="mt-2 text-gray-300 mb-4">Get the latest lab testing data sent directly to your inbox.</p>
            <form onSubmit={handleSubmit} className="flex gap-2 justify-end">
              <input 
                type="email" 
                name="email"
                placeholder="Enter email address"
                className="bg-green-700/50 text-white placeholder-gray-300 px-4 py-2 rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button 
                type="submit"
                className="bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-sm text-gray-300 border-t border-gray-500 mt-12 pt-6 flex justify-between">
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
          <p>&copy; 2025 Olive Inc.</p>
        </div>
      </div>
    </footer>
  );
}