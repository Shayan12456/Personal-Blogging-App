import React, { useState } from 'react';
import blogs from '../data/blogs.json';
import { useNavigate } from 'react-router-dom';

export default function Blogs() {
  document.title = 'Blogs';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortNewest, setSortNewest] = useState(true);
  const navigate = useNavigate();

  const categories = ['All', ...Array.from(new Set(blogs.map((post) => post.category)))];

  const filteredBlogs = blogs
    .filter((post) =>
      (selectedCategory === 'All' || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortNewest ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 md:px-20 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">📚 Blog Categories</h1>

      {/* Search + Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search blog titles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>

        <button
          onClick={() => setSortNewest(!sortNewest)}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg"
        >
          Sort by: {sortNewest ? 'Newest' : 'Oldest'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((post) => (
          <div
            key={post.id}
            className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate(`/blogs/${post.id}`)}
          >
            <h2 className="text-xl font-semibold text-indigo-400 mb-1">{post.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{post.category} • {post.date}</p>
            <p className="text-gray-300 text-sm mb-4">{post.description}</p>
            <span className="inline-block text-indigo-300 hover:underline text-sm">
              Read more →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}