import React from 'react';
import { Facebook, Instagram, Pointer as Pinterest, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Perfect Wood Crafts</h3>
            <p className="text-sm">
              Your trusted source for woodworking plans, tools, and expert advice.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/plans" className="hover:text-amber-400">Woodworking Plans</a></li>
              <li><a href="/tools" className="hover:text-amber-400">Shop Tools</a></li>
              <li><a href="/blog" className="hover:text-amber-400">Blog</a></li>
              <li><a href="/about" className="hover:text-amber-400">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="hover:text-amber-400">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-amber-400">FAQ</a></li>
              <li><a href="/privacy" className="hover:text-amber-400">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-amber-400">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-400"><Facebook /></a>
              <a href="#" className="hover:text-amber-400"><Instagram /></a>
              <a href="#" className="hover:text-amber-400"><Pinterest /></a>
              <a href="#" className="hover:text-amber-400"><Youtube /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Perfect Wood Crafts. All rights reserved.</p>
          <p className="mt-2">
            This site contains affiliate links. We may earn a commission when you purchase through our links.
          </p>
        </div>
      </div>
    </footer>
  );
}