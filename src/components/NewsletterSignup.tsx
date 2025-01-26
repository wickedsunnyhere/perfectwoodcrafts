import React from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterSignup() {
  return (
    <div className="bg-amber-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="mx-auto h-12 w-12 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Get Free Woodworking Plans</h2>
          <p className="text-lg mb-8">
            Join our community and receive exclusive woodworking plans, tips, and tutorials.
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-gray-900"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-600 rounded-md hover:bg-amber-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}