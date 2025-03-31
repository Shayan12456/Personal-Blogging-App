import React from 'react';
import profileImage from '../assets/Final_Profile_Picture.png';

export default function Intro() {
  return (
    <section
      className={`w-full min-h-screen flex items-center justify-center px-6 py-16 transition-colors duration-500`}
    >
      <div className="max-w-2xl text-center">
        {/* Profile Photo */}
        <img
          src={profileImage}
          alt="Shayan's Avatar"
          className='w-80 h-80 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover'
        />

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Hi, I'm Shayan. I write about dev, design, and ideas that work.
        </h1>

        {/* Vibe Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Blending tech with sarcasm, side-projects with soul. Sometimes deep, mostly delightful.
        </p>

        {/* Now Section */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-4 inline-block text-sm text-gray-200">
          <strong>Now:</strong> Building AI Agents using MCP and drinking too much coffee. ☕
        </div>
      </div>
    </section>
  );
}
