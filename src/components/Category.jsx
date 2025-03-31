import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bot, Palette, Monitor, Lightbulb, Braces, LayoutDashboard, Gauge, Library } from 'lucide-react';
import blogs from '../data/blogs.json';

export default function Category() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const posts = blogs;
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const filteredPosts = posts
    .filter((post) => selectedCategory === 'All' || post.category === selectedCategory)
    .filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
      
    return (
      <div className="p-6 top-4 bg-gray-800">
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-white rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200
            bg-gray-700 text-gray-300 placeholder-gray-400 
            bg-gray-100 text-gray-900 placeholder-gray-500"
    />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">Categories</h4>
          <div className="space-y-2">
            {[
              { icon: Bot, name: 'AI' },
              { icon: Palette, name: 'Design' },
              { icon: Monitor, name: 'Frontend' },
              { icon: Lightbulb, name: 'Dev Tips' },
              { icon: Braces, name: 'CSS' },
              { icon: LayoutDashboard, name: 'UI/UX' },
              { icon: Gauge, name: 'Performance' },
              { icon: Library, name: 'All' },
            ].map(({ icon: Icon, name }) => (
            <button
              key={name}
              onClick={() => setSelectedCategory(name)}
              className={`flex items-center w-full px-4 py-2 rounded-lg transition-all duration-200
                  ${
                  selectedCategory === name
                      ? 'bg-indigo-600 text-white transform scale-100 hover:bg-gray-700'
                      : 'hover:bg-opacity-10 hover:bg-gray-700 text-gray-300'
                  }`}
              >
              <Icon className="h-5 w-5 mr-2" />
              {name}
            </button>
          ))}
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">Popular Posts</h4>
          <div className="space-y-4">
            {filteredPosts.slice(0, 5).map((post) => (
          <div
            key={post.id}
            onClick={() => navigate(`/blogs/${post.id}`)}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <img
              src={post.thumbnail}
              alt={post.title}
              className="h-16 w-16 rounded-lg object-contain bg-white p-1 transition-transform duration-200 group-hover:scale-105"
            />
            <div>
              <h5 className="text-sm font-medium group-hover:text-indigo-500 transition-colors duration-200">
                {post.title}
              </h5>
              <p className="text-xs text-gray-400">
                {post.date}
              </p>
            </div>
          </div>
        ))}

        </div>
        </div>
      </div>
    );
}