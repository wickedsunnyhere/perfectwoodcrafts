import React, { useState } from 'react';
import { Tool } from '../types';
import { DollarSign, Star, Tag } from 'lucide-react';

const SAMPLE_TOOLS: Tool[] = [
  {
    id: '1',
    name: 'Professional Table Saw',
    category: 'power',
    description: 'High-precision table saw with safety features and extended warranty.',
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80',
    price: 599.99,
    affiliateUrl: '#',
    brand: 'DeWalt'
  },
  {
    id: '2',
    name: 'Premium Chisel Set',
    category: 'hand',
    description: 'Set of 6 hand-crafted chisels perfect for detailed woodworking.',
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80',
    price: 149.99,
    affiliateUrl: '#',
    brand: 'Stanley'
  },
  {
    id: '3',
    name: 'Hardwood Selection Pack',
    category: 'materials',
    description: 'Curated selection of premium hardwoods for fine woodworking.',
    imageUrl: 'https://images.unsplash.com/photo-1610505466122-b1fe334e37e1?auto=format&fit=crop&q=80',
    price: 299.99,
    affiliateUrl: '#',
    brand: 'Woodcraft'
  }
];

const CategoryBadge = ({ category }: { category: Tool['category'] }) => {
  const colors = {
    power: 'bg-blue-100 text-blue-800',
    hand: 'bg-green-100 text-green-800',
    materials: 'bg-purple-100 text-purple-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[category]}`}>
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </span>
  );
};

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Tool['category'] | 'all'>('all');
  const [priceRange, setPriceRange] = useState<number>(1000);

  const filteredTools = SAMPLE_TOOLS.filter(tool => 
    (selectedCategory === 'all' || tool.category === selectedCategory) &&
    tool.price <= priceRange
  );

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop Tools</h1>
          <p className="text-xl text-gray-600 mb-8">Quality tools for every woodworking project</p>
          
          <div className="prose max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Essential Woodworking Tools</h2>
            <p className="text-gray-600 mb-6">
              Whether you're a beginner or a seasoned craftsman, having the right tools is crucial for successful woodworking projects. We've carefully curated a selection of high-quality tools from trusted brands to help you create beautiful pieces.
            </p>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Why Choose Our Tools?</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Carefully selected from reputable manufacturers</li>
              <li>Tested and reviewed by experienced woodworkers</li>
              <li>Competitive prices and exclusive deals</li>
              <li>Detailed specifications and honest reviews</li>
            </ul>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as Tool['category'] | 'all')}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="all">All Categories</option>
                <option value="power">Power Tools</option>
                <option value="hand">Hand Tools</option>
                <option value="materials">Materials</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Price: ${priceRange}
              </label>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={tool.imageUrl}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{tool.name}</h3>
                  <CategoryBadge category={tool.category} />
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Tag className="h-5 w-5 mr-2" />
                    <span>{tool.brand}</span>
                  </div>
                  <div className="flex items-center text-gray-900 font-semibold">
                    <DollarSign className="h-5 w-5 mr-1" />
                    <span>{tool.price.toFixed(2)}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{tool.description}</p>
                
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-600 text-white text-center py-2 px-4 rounded-md hover:bg-amber-700 transition-colors"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}