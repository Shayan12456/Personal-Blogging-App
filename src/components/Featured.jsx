import React from "react";
import { Link } from "react-router-dom";
import blogs from '../data/blogs.json';

export default function Featured() {
    // Dummy data for blog posts
    const posts = blogs.filter(post  => post["isFeatures"]===true);
  return (
    <>
         {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl text-black md:text-4xl font-bold mb-10 mx-auto text-center">📌 Featured Posts</h2>

        <div className="flex flex-col justify-center lg:flex-row gap-8">
            
          {/* Blog Grid */}
          <div className="lg:w-3/4">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                // inside map
                <Link to={`/blogs/${post.id}`} key={post.id}>
                  <article
                    key={post.id}
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gray-800">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="h-48 w-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-sm font-medium">Read More →</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                        {post.category}
                      </span>
                      <h3 className="mt-4 text-xl font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-gray-400">
                        {post.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>

              ))}
            </div>
          </div>
            
        </div>
      </div>
    </>
  );
}
