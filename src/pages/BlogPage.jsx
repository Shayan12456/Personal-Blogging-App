import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from '../data/blogs.json';
import avatar from '../assets/Final_Profile_Picture.png'
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'; // or another theme you like

export default function BlogPage() {
  const { id } = useParams();
  const [scrollPercent, setScrollPercent] = useState(0);
  const [userName, setUserName] = useState('');
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const post = blogs.find((p) => p.id === id);
  document.title = post.title;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setScrollPercent(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) return <div className="text-center text-white py-20">Blog not found.</div>;

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 md:px-40 pt-16 pb-24">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-indigo-500 z-50" style={{ width: `${scrollPercent}%` }} />

      <div className="mb-8">
        <Link to="/blogs" className="text-indigo-400 hover:underline">← Back to All Blogs</Link>
      </div>

      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <div className="flex items-center gap-3 mb-4">
        <img src={avatar} alt={post.author.name} className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-sm text-gray-300">{post.author.name}</p>
          <p className="text-xs text-gray-500">{post.date} • {post.readingTime}</p>
        </div>
      </div>

      {post.thumbnail && (
        <img
          src={post.thumbnail}
          alt={post.title}
          className="rounded-lg mb-8 w-full max-h-[400px] object-cover"
        />
      )}

      <div className="prose prose-invert max-w-none text-gray-300 space-y-6 leading-relaxed">
        {post.content.map((para, i) => (
          <ReactMarkdown
            key={i}
            children={para}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          />
        ))}
      </div>


      {/* Tags */}
      <div className="mt-10 flex flex-wrap gap-2">
        {post.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-medium bg-gray-800 text-indigo-300 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Comments Section */}
      <div className="mt-16 border-t border-gray-700 pt-10">
        <h3 className="text-2xl font-semibold mb-4">💬 Comments</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!newComment.trim() || !userName.trim()) return;
            setComments((prev) => ({
              ...prev,
              [id]: [...(prev[id] || []), { [userName || "Anonymous"]: newComment }],
            }));
            setNewComment('');
            setUserName('');
          }}
          className="mb-6"
        >   
          <input 
            value={userName}
            type="text" 
            onChange={(e) => setUserName(e.target.value)} 
            name="username" 
            placeholder='@username' 
            className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3" 
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={4}
            placeholder="Share your thoughts..."
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (!newComment.trim()) return;
                setComments((prev) => ({
                  ...prev,
                  [id]: [...(prev[id] || []), { [userName || "Anonymous"]: newComment }],
                }));
                setNewComment('');
              }
            }}
            
          ></textarea>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-6">
          {(post.comments!==null)?(post.comments).map((c, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg mt-6">
               <p className="text-sm text-gray-400">{Object.keys(c)[0]}</p>
               <p className="text-gray-300 mt-1">{Object.values(c)[0]}</p>
            </div>
          )):""}
          </div>

          <div className="space-y-6">
            {(comments[id] || []).map((c, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded-lg mt-6">
                <p className="text-sm text-gray-400">{Object.keys(c)[0]}</p>
                <p className="text-gray-300 mt-1">{Object.values(c)[0]}</p>
              </div>
            ))}
          </div>

      </div>
    </div>
  );
}