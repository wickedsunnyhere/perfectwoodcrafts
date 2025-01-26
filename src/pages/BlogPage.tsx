import React, { useState } from 'react';
import { BlogPost } from '../types';
import { Calendar, Tag, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';

const CategoryBadge = ({ category }: { category: BlogPost['category'] }) => {
  const colors = {
    beginner: 'bg-green-100 text-green-800',
    advanced: 'bg-red-100 text-red-800',
    reviews: 'bg-blue-100 text-blue-800',
    diy: 'bg-purple-100 text-purple-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[category]}`}>
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </span>
  );
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogPost['category'] | 'all'>('all');

  const filteredPosts = BLOG_POSTS.filter(
    post => selectedCategory === 'all' || post.category === selectedCategory
  );

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Woodworking Blog</h1>
          <p className="text-xl text-gray-600 mb-8">Expert tips, tutorials, and inspiration</p>

          <div className="prose max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Learn from the Experts</h2>
            <p className="text-gray-600 mb-6">
              Discover in-depth articles, step-by-step tutorials, and expert advice to help you master the art of woodworking. From beginner basics to advanced techniques, we've got you covered.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button 
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === 'all' 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                }`}
              >
                All Posts
              </button>
              <button 
                onClick={() => setSelectedCategory('beginner')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === 'beginner'
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                }`}
              >
                Beginner Guides
              </button>
              <button 
                onClick={() => setSelectedCategory('advanced')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === 'advanced'
                    ? 'bg-red-600 text-white'
                    : 'bg-red-100 text-red-800 hover:bg-red-200'
                }`}
              >
                Advanced Tips
              </button>
              <button 
                onClick={() => setSelectedCategory('reviews')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === 'reviews'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
              >
                Tool Reviews
              </button>
              <button 
                onClick={() => setSelectedCategory('diy')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === 'diy'
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                }`}
              >
                DIY Projects
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <CategoryBadge category={post.category} />
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="mt-6 inline-block text-amber-600 font-medium hover:text-amber-700"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}