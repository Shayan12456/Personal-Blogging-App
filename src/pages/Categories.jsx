import React from 'react';
import blogs from '../data/blogs.json';
import { Link } from 'react-router-dom';

export default function CategoriesPage() {
  document.title = "Categories | Blog";
  // Get unique categories from all blogs
  const categories = Array.from(new Set(blogs.map((post) => post.category)));

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 md:px-20 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">📚 Blog Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-400">{category}</h2>
            <ul className="text-gray-300 space-y-1 text-sm">
              {blogs
                .filter((post) => post.category === category)
                .map((post) => (
                  <li key={post.id}>
                    <Link
                      to={`/blog/${post.id}`}
                      className="hover:underline hover:text-indigo-300"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}