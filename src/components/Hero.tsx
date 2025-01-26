import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?auto=format&fit=crop&q=80"
          alt="Woodworking Workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Craft Your Dreams
            <span className="block text-amber-400">The Ultimate Hub for Woodworking Enthusiasts</span>
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl">
            Discover expert-curated woodworking plans, honest tool reviews, and in-depth tutorials to bring your projects to life.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="/plans"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700"
            >
              Explore Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a
              href="/tools"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-amber-900"
            >
              Shop Tools
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}