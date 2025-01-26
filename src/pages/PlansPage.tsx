import React from 'react';
import { WoodworkingPlan } from '../types';
import { Star, Clock, PenTool as Tool } from 'lucide-react';

const SAMPLE_PLANS: WoodworkingPlan[] = [
  {
    id: '1',
    title: 'Rustic Farmhouse Table',
    skillLevel: 'intermediate',
    timeEstimate: '12-15 hours',
    materials: ['Oak wood', 'Wood screws', 'Wood glue', 'Stain'],
    imageUrl: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80',
    isPremium: false
  },
  {
    id: '2',
    title: 'Modern Bookshelf',
    skillLevel: 'beginner',
    timeEstimate: '6-8 hours',
    materials: ['Pine wood', 'Brackets', 'Wood screws', 'Paint'],
    imageUrl: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80',
    isPremium: false
  },
  {
    id: '3',
    title: 'Garden Planter Box',
    skillLevel: 'beginner',
    timeEstimate: '4-6 hours',
    materials: ['Cedar wood', 'Screws', 'Wood sealer'],
    imageUrl: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80',
    isPremium: false
  }
];

const SkillLevelBadge = ({ level }: { level: WoodworkingPlan['skillLevel'] }) => {
  const colors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[level]}`}>
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
};

export default function PlansPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Woodworking Plans</h1>
          <p className="text-xl text-gray-600 mb-8">Detailed plans for your next woodworking project</p>

          <div className="prose max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Crafting Made Simple</h2>
            <p className="text-gray-600 mb-6">
              Our woodworking plans are designed to help you create beautiful, lasting pieces with confidence. Each plan includes detailed instructions, cut lists, and expert tips to ensure your success.
            </p>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">What's Included in Each Plan:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Step-by-step instructions with detailed diagrams</li>
              <li>Complete materials list and cut sheet</li>
              <li>Tool requirements and alternatives</li>
              <li>Finishing recommendations</li>
              <li>Expert tips and common mistakes to avoid</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_PLANS.map((plan) => (
            <div key={plan.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={plan.imageUrl}
                  alt={plan.title}
                  className="w-full h-full object-cover"
                />
                {plan.isPremium && (
                  <div className="absolute top-4 right-4">
                    <Star className="h-6 w-6 text-amber-400 fill-current" />
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{plan.title}</h3>
                  <SkillLevelBadge level={plan.skillLevel} />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{plan.timeEstimate}</span>
                  </div>
                  
                  <div className="flex items-start text-gray-600">
                    <Tool className="h-5 w-5 mr-2 mt-1" />
                    <span>{plan.materials.join(', ')}</span>
                  </div>
                </div>
                
                <button className="mt-6 w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors">
                  View Plan Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}