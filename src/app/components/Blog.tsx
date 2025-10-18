import { useRef } from "react";
import AnimatedBackground from './AnimatedBackground';

interface BlogProps {
  onNavigateToWriteups?: () => void;
}

export default function Blog({ onNavigateToWriteups }: BlogProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    {
      id: 1,
      title: "HackTheBox Writeups",
      date: "Updated regularly",
      category: "CTF Writeups",
      excerpt: "Detailed writeups and solutions from HackTheBox challenges. Learn penetration testing techniques and security best practices.",
      readTime: "Various",
      isWriteups: true
    }
  ];

  const categories = ["All", "Cybersecurity", "Web Development", "Programming"];

  return (
    <section className="min-h-screen text-white py-[100px] relative overflow-hidden" ref={containerRef}>
      <AnimatedBackground />
      
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Blog Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">My Blog</h1>
            <p className="text-xl text-gray-400">
              Thoughts on cybersecurity, web development, and hacking
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => post.isWriteups && onNavigateToWriteups?.()}
                className={`bg-gray-800 p-6 rounded-lg border transition-all duration-300 hover:shadow-lg cursor-pointer group ${
                  post.isWriteups
                    ? 'border-purple-500 hover:border-purple-400 hover:shadow-purple-500/20'
                    : 'border-gray-700 hover:border-blue-500 hover:shadow-blue-500/20'
                }`}
              >
                {/* Category Badge */}
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    post.isWriteups
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className={`text-2xl font-bold mb-2 transition-colors ${
                  post.isWriteups
                    ? 'group-hover:text-purple-400'
                    : 'group-hover:text-blue-400'
                }`}>
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-700">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Read More */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className={`font-semibold text-sm ${
                    post.isWriteups
                      ? 'text-purple-400 group-hover:text-purple-300'
                      : 'text-blue-400 group-hover:text-blue-300'
                  }`}>
                    {post.isWriteups ? 'View Writeups →' : 'Read More →'}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}