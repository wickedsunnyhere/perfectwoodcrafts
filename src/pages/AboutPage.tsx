import React from 'react';
import { PenTool as Tool, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Perfect Wood Crafts</h1>
          <p className="text-xl text-gray-600">Empowering woodworkers with knowledge and quality tools</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Perfect Wood Crafts was born from a passion for woodworking and a desire to share knowledge with fellow craftsmen. What started as a small blog has grown into a comprehensive resource for woodworkers of all skill levels.
              </p>
              <p className="text-gray-600">
                Our mission is to provide detailed woodworking plans, honest tool reviews, and expert advice to help you create beautiful pieces that will last generations.
              </p>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1581612129334-551ccd069e63?auto=format&fit=crop&q=80"
                alt="Woodworking Workshop"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Tool className="h-12 w-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Reviews</h3>
            <p className="text-gray-600">
              We thoroughly test and review woodworking tools to help you make informed purchasing decisions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Tool className="h-12 w-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Plans</h3>
            <p className="text-gray-600">
              Our woodworking plans include step-by-step instructions, materials lists, and helpful tips.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Tool className="h-12 w-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">
              Join our growing community of woodworking enthusiasts and share your experiences.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Start Your Next Project?</h2>
          <a
            href="/plans"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700"
          >
            Browse Our Plans
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}