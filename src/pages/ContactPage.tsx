import React from 'react';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Have questions? We're here to help!</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-8">
            <div className="flex items-center justify-center mb-8">
              <Mail className="h-12 w-12 text-amber-600" />
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h2>
              <p className="text-lg text-gray-600 mb-6">
                For any inquiries, please email us at:
              </p>
              <a 
                href="mailto:naturalwoods@proton.me"
                className="text-xl font-medium text-amber-600 hover:text-amber-700"
              >
                naturalwoods@proton.me
              </a>
              <p className="mt-6 text-gray-600">
                We strive to respond to all emails within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}