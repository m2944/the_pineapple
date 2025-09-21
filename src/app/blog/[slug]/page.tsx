// app/blog/[slug]/page.tsx

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // We can use the 'slug' from the URL to fetch blog content later.
  // For now, let's just display it to show that it's working.
  const postTitle = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="w-full max-w-3xl text-left">
      <h1 className="text-5xl font-bold text-white mb-8">{postTitle}</h1>
      <p className="text-lg text-gray-400 mb-8">
        Posted on September 21, 2025
      </p>

      {/* Placeholder Content */}
      <div className="prose prose-invert prose-lg text-gray-300">
        <p>
          This is a placeholder for your blog post content. The title of this post, &quot;{postTitle},&quot; was generated directly from the URL.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}