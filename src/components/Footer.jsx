import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                
                {/* Left: Logo & Description */}
                <div>
                <h2 className="text-xl font-bold text-white mb-4">📚 Learn, Build, Repeat
                </h2>
                <p className="text-sm leading-relaxed">
                    Insights, guides, and stories for developers. From frontend tricks to backend logic — everything in one place.
                </p>
                </div>

                {/* Center: Quick Links */}
                <div>
                <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="/" className="hover:text-white transition">Home</a></li>
                    <li><a href="/blogs" className="hover:text-white transition">All Blogs</a></li>
                </ul>
                </div>

                {/* Right: Socials */}
                <div>
                <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="https://x.com/ShayanDanish17" className="hover:text-white transition">Twitter</a></li>
                    <li><a href="https://github.com/Shayan12456" className="hover:text-white transition">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/shayan-danish" className="hover:text-white transition">LinkedIn</a></li>
                    <li><a href="mailto:shayan.developer12@gmail.com" className="hover:text-white transition">Email</a></li>
                </ul>
                </div>

            </div>

            <div className="mt-12 text-center text-xs text-gray-600">
                © {new Date().getFullYear()}. Built with 💻 by Shayan.
            </div>
        </footer>
    );
}